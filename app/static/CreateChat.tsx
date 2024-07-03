import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { createChat } from "../core/chats/chatActions";

const CreateChat = ({ navigation }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

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
