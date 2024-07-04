import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../core/store";
import ChatListItem from "../shared/components/ChatListItem";
import Button from "../shared/components/Button";
import { fetchChats } from "../core/chats/chatActions";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "types/RootStackParamList";
import { Chat } from "types/Chat";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const chats = useSelector((state: RootState) => state.chat.chats);

  useEffect(() => {
    dispatch(fetchChats());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({ item }: { item: Chat }) => (
          <ChatListItem
            chat={item}
            navigateToChat={() =>
              navigation.navigate("Chat", { chatId: item.id })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Create Chat"
        onPress={() => navigation.navigate("CreateChat")}
      />
    </View>
  );
};

export default Home;
