import { Message } from "static/Chat";

export interface Chat {
  id: string;
  name: string;
  createdAt: string;
  messages: Message[];
}
