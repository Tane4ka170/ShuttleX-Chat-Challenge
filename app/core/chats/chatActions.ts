import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Chat } from "types/Chat";

const API_URL = "https://6686aec583c983911b033c7f.mockapi.io/chats";

export const fetchChats = createAsyncThunk<Chat[]>(
  "chats/fetchChats",
  async () => {
    const response = await axios.get(API_URL);
    return response.data as Chat[];
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
    await axios.delete(`${API_URL}/${chatId}`);
  }
);
