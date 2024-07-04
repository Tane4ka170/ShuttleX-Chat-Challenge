import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Chat } from "types/Chat";

const API_URL = "https://your-mock-api-url.com/chats";

export const fetchChats = createAsyncThunk<Chat[]>(
  "chats/fetchChats",
  async () => {
    // Replace with actual API call
    const response = await fetch("/api/chats");
    return (await response.json()) as Chat[];
  }
);

export const createChat = createAsyncThunk(
  "chats/createChat",
  async (newChat: any) => {
    const response = await axios.post(API_URL, newChat);
    return response.data;
  }
);

export const deleteChat = createAsyncThunk<void, string>(
  "chats/deleteChat",
  async (chatId) => {
    await fetch(`/api/chats/${chatId}`, { method: "DELETE" });
  }
);
