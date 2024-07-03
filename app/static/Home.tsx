import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../core/store";
import ChatListItem from "../shared/components/ChatListItem";
import Button from "../shared/components/Button";
import { fetchChats } from "core/chats/chatActions";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state: RootState) => state.chat.chats);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatListItem chat={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Create Chat"
        onPress={() => navigation.navigate("CreateChat")}
      />
    </View>
  );
};

export default Home;
