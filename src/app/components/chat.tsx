import { ChatBubble } from "./chat-bubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Message } from "ai/react";

export function Chat() {
  const message: Message[] = [
    { role: "assistant", content: "hey I am your AI", id: "1" },
    { role: "user", content: "hey I am the user", id: "2" },
  ];

  const sources = ["I am source one", "I am source two"];
}
