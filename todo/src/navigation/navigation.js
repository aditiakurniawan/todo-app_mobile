// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screen/Home";
import Detail from "../screen/Detail";
import Login from "../screen/Login";
import Register from "../screen/Register";
import List from "../screen/List";
import AddList from "../screen/AddList";
import AddCategory from "../screen/AddCategory";
const Stack = createNativeStackNavigator();

function Navigation({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="AddList" component={AddList} />
        <Stack.Screen name="AddCategory" component={AddCategory} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
