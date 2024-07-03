import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "../core/store";
import Home from "../static/Home";
import Chat from "../static/Chat";
import CreateChat from "../static/CreateChat";

const Stack = createStackNavigator();

const Tabs = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="CreateChat" component={CreateChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Tabs;
