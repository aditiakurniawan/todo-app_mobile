// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screen/Home";
import Detail from "../screen/Detail";
import Login from "../screen/Login";
import Register from "../screen/Register";
import List from "../screen/List";
import AddList from "../screen/AddList";
import AddCategory from "../screen/AddCategory";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ButtonTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor;
          if (route.name == "List") {
            iconName = "clipboard-list";
            iconColor = focused ? "#FF5555" : "#d4d4d4";
          } else if (route.name == "AddList") {
            iconName = "text-box-check";
            iconColor = focused ? "#FF5555" : "#d4d4d4";
          } else if (route.name == "AddCategory") {
            iconName = "shape";
            iconColor = focused ? "#FF5555" : "#d4d4d4";
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={28}
              color={iconColor}
            />
          );
        },
        tabBarActiveTintColor: "#FF5555",
        tabBarInactiveTintColor: "#d4d4d4",
      })}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddList"
        component={AddList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddCategory"
        component={AddCategory}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function Navigation({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen
          name="AddList"
          component={AddList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="List"
          component={ButtonTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Button"
          component={ButtonTab}
          options={{
            headerShown: false,
            headerTintColor: "white",
            headerMode: "screen",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
