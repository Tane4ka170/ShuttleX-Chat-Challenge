import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../core/chats/chatActions";
import { Chat } from "types/Chat";
import { AppDispatch } from "core/store";

type ChatListItemProps = {
  chat: Chat;
  navigateToChat: () => void;
};

const ChatListItem: React.FC<ChatListItemProps> = ({
  chat,
  navigateToChat,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteChat(chat.id));
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToChat}>
        <Text>{chat.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatListItem;
