import { createParser } from "eventsource-parser";

export async function* sseToLineStream(response: Response) {
  if (!response.ok || !response.body) {
    throw new Error(
      `Failed to connect to SSE stream: ${response.status} ${response.statusText}`,
    );
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let lineBuffer = "";
  const pendingLines: string[] = [];
  let isFinished = false;

  const parser = createParser({
    onEvent: (event) => {
      if (event.data.trim() === "[DONE]") {
        isFinished = true;
        return;
      }

      try {
        const json = JSON.parse(event.data);
        const content = json.choices?.[0]?.delta?.content;
        if (!content) return;

        lineBuffer += content;
        const lines = lineBuffer.split("\n");
        lineBuffer = lines.pop() || "";
        pendingLines.push(...lines.filter(Boolean));
      } catch {
        throw new Error(`Failed to parse SSE data as JSON: ${event.data}`);
      }
    },
  });

  try {
    while (!isFinished) {
      if (pendingLines.length > 0) {
        yield pendingLines.shift()!;
        continue;
      }

      const { done, value } = await reader.read();
      if (done) {
        isFinished = true;
        continue;
      }

      parser.feed(decoder.decode(value, { stream: true }));
    }

    if (lineBuffer) yield lineBuffer;
  } finally {
    reader.releaseLock();
  }
}
