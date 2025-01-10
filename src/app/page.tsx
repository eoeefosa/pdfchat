import { Chat } from "./components/chat";
import { DarkModeToggle } from "./components/dark-mode-toggle";

export default function Home() {
  return (
    <main className="relative container flex min-h-screen flex-col">
      <div className="p-4 flex h-14 item-center justify-between supports-backdrop-blur:bg-background">
        <span className="font-bold">Pdf-chat-ai-sdk</span>
        <DarkModeToggle />
      </div>
      <div>
        <div className="flex flex-1 py-4">
          <div className="w-full">
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
}
