import React from "react";
import { View, Text } from "react-native";

const Message = ({ message }) => (
  <View>
    <Text>{message.text}</Text>
  </View>
);

export default Message;
