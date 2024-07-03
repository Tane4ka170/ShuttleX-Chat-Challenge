import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://your-mock-api-url.com/chats";

export const fetchChats = createAsyncThunk("chats/fetchChats", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const createChat = createAsyncThunk(
  "chats/createChat",
  async (newChat: any) => {
    const response = await axios.post(API_URL, newChat);
    return response.data;
  }
);

export const deleteChat = createAsyncThunk<string, string>(
  "chats/deleteChat",
  async (chatId: string) => {
    await axios.delete(`${API_URL}/${chatId}`);
    return chatId;
  }
);
