import { ChatMessageListDemo } from "@/components/Demo";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <main className="h-screen w-full max-w-3xl mx-auto p-8">
        <ChatMessageListDemo />
      </main>
    </>
  );
}
