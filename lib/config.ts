export interface ConfigProps {
  config: Config;
}

export type Config = {
  root: string;
  title: string;
  subTitle: string;
  compiler: CompilerConfig;
  chat: ChatConfig;
  portfolio: PortfolioConfig;
  articleNamespace: string;
};

type ConfigEntry<T> = {
  namespace: string;
  route: string;
  text: T;
};

type ChatConfig = ConfigEntry<{
  userName: string;
  cyreneName: string;
  sendingMessageText: string;
  failedToSendMessageText: string;
  waitingForReplyText: string;
  placeholderText: string;
  systemPrompt: string;
  autoPlayEnabledHint: string;
  clickToProceedHint: string;
}>;

type PortfolioConfig = ConfigEntry<{}>;

type CompilerConfig = ConfigEntry<{ runningOn: string }>;

export const ZH: Config = {
  root: "zh",
  title: "欢迎来到 Felys\xA0项\u2060目",
  subTitle: "致爱莉希雅与昔涟",
  compiler: {
    namespace: "编译器",
    route: "compiler",
    text: { runningOn: "运行在" },
  },
  chat: {
    namespace: "聊天",
    route: "chat",
    text: {
      userName: "银河猫猫侠",
      cyreneName: "昔涟",
      sendingMessageText: "消息发送中……",
      waitingForReplyText: "昔涟正在输入中……",
      failedToSendMessageText: "发送失败，请稍后重试。",
      placeholderText: "陪昔涟聊聊天吧，按「回车」发送消息。",
      systemPrompt: "不管用户用什么语言，都请用中文回答。",
      autoPlayEnabledHint: "已启用自动播放",
      clickToProceedHint: "点击对话框继续",
    },
  },
  portfolio: {
    namespace: "作品集",
    route: "portfolio",
    text: {},
  },
  articleNamespace: "文章",
};

export const EN: Config = {
  root: "en",
  title: "Welcome to the Felys\xA0project",
  subTitle: "To Elysia and Cyrene",
  compiler: {
    namespace: "Compiler",
    route: "compiler",
    text: { runningOn: "on" },
  },
  chat: {
    namespace: "Chat",
    route: "chat",
    text: {
      userName: "FelysNeko",
      cyreneName: "Cyrene",
      sendingMessageText: "Sending message...",
      waitingForReplyText: "Cyrene is typing...",
      failedToSendMessageText:
        "Failed to send the message, please retry later.",
      placeholderText: 'Chat with Cyrene, press "ENTER" to send.',
      systemPrompt:
        "Please answer in English regardless of the user input language.",
      autoPlayEnabledHint: "Auto-play enabled",
      clickToProceedHint: "Click on the chat box to proceed",
    },
  },
  portfolio: {
    namespace: "Portfolio",
    route: "portfolio",
    text: {},
  },
  articleNamespace: "Articles",
};
