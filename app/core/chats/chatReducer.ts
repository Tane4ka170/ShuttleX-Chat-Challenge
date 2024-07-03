import { createSlice } from "@reduxjs/toolkit";
import { fetchChats, createChat, deleteChat } from "./chatActions";
import { Chat } from "types/Chat";

interface ChatState {
  chats: Chat[];
  status: string;
  error: string | null;
}

const initialState: ChatState = {
  chats: [],
  status: "idle",
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.chats = action.payload;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.chats.push(action.payload);
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.chats = state.chats.filter((chat) => chat.id !== action.payload);
      });
  },
});

export const chatReducer = chatSlice.reducer;
