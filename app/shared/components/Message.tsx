import React from "react";
import { View, Text } from "react-native";

interface MessageProps {
  message: {
    text: string;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => (
  <View>
    <Text>{message.text}</Text>
  </View>
);

export default Message;
