import { Button } from "@/src/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="text-4xl font-bold">Planting guide</h1>
        <Button>login</Button>
      </div>
    </main>
  );
}
