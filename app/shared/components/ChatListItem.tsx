import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../core/chats/chatActions";

const ChatListItem = ({ chat, navigation }) => {
  const dispatch = useDispatch();

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
