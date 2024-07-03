import { configureStore } from "@reduxjs/toolkit";
import { chatReduser } from "./chats/chatReducer";

export const store = configureStore({
  reducer: {
    chat: chatReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
