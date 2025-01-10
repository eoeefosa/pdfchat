import Balancer from "react-wrap-balancer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";

const wrappedText = (text: string) =>
  text.split("/n").map((line, i) => {
    <span key={i}>
      {line}
      <br />
    </span>;
  });
