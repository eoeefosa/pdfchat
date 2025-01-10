import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formattedSourceText(inputText: String) {
  return inputText
    .replace(/\n/g, " ") //replace multiple consecutive new lines with a single space
    .replace(/(\w)-(\w)/g, "$1$2") //join hyphenated word together
    .replace(/\s+/g, " "); // replace multiple consecutive spaces with a single space
}
