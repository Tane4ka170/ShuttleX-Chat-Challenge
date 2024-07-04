import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { createChat } from "../core/chats/chatActions";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "types/RootStackParamList";
import { useAppDispatch } from "core/hooks/hooks";

type CreateChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CreateChat"
>;

type CreateChatProps = {
  navigation: CreateChatScreenNavigationProp;
};

const CreateChat: React.FC<CreateChatProps> = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(createChat({ name }));
    navigation.navigate("Home");
  };

  return (
    <View>
      <TextInput value={name} onChangeText={setName} placeholder="Chat Name" />
      <Button title="Create" onPress={handleSubmit} />
    </View>
  );
};

export default CreateChat;
