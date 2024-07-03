import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
};

const Button: React.FC<ButtonProps> = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default Button;
