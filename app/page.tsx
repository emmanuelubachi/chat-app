import { ChatMessageListDemo } from "@/components/Demo";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <main className="h-screen w-full pt-16 pb-4 mx-auto">
        <ChatMessageListDemo />
      </main>
    </>
  );
}
