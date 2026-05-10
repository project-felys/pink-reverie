import Navigator from "@/components/navigator";

export default function Page() {
  return (
    <div className="h-dvh w-dvw flex flex-col">
      <Navigator />
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-450 mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="aspect-4/3 bg-neutral-800 rounded-xl p-4 shadow flex justify-center items-center">
      <h1 className="text-lg font-semibold">Coming soon...</h1>
    </div>
  );
}
