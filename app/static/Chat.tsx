import React, { useState, useEffect } from "react";
import { View, FlatList, TextInput, Button } from "react-native";
import Message from "../shared/components/Message";
import io from "socket.io-client";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "types/RootStackParamList";

type ChatScreenRouteProp = RouteProp<RootStackParamList, "Chat">;

type ChatProps = {
  route: ChatScreenRouteProp;
};

interface Message {
  id: string;
  text: string;
}

const Chat: React.FC<ChatProps> = ({ route }) => {
  const { chatId } = route.params;
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>("");
  const socket = io("https://your-mock-api-url.com");

  useEffect(() => {
    socket.emit("joinChat", chatId);

    socket.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [chatId]);

  const sendMessage = () => {
    socket.emit("chatMessage", text);
    setText("");
  };

  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item) => item.id}
      />
      <TextInput value={text} onChangeText={setText} />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default Chat;
