import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { deleteChat } from "../../core/chats/chatActions";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "types/RootStackParamList";
import { Chat } from "types/Chat";
import { useAppDispatch } from "core/hooks/hooks";

type ChatListItemProps = {
  chat: Chat;
  navigation: StackNavigationProp<RootStackParamList, "Chat">;
};

const ChatListItem: React.FC<ChatListItemProps> = ({ chat, navigation }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteChat(chat.id));
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat", { chatId: chat.id })}
      >
        <Text>{chat.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatListItem;
