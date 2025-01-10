import { ChatBubble } from "./chat-bubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "ai/react";

export function Chat() {
  const messages: Message[] = [
    { role: "assistant", content: "hey I am your AI", id: "1" },
    { role: "user", content: "hey I am the user", id: "2" },
  ];

  const sources = ["I am source one", "I am source two"];

  return (
    <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
      <div>
        {messages.map(({ id, role, content }: Message, index) => (
          <ChatBubble
            key={id}
            role={role}
            content={content}
            sources={role !== "assistant" ? [] : sources}
          />
        ))}
      </div>
    </div>
  );
}
