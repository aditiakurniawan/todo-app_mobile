import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Image,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";

import { Platform } from "react-native";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import AddList from "./page/AddList";
import AddCategory from "./page/AddCategory";
import Detail from "./page/Detail";
import Menu from "./components/Menu";
import List from "./page/List";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Home />
          {/* <Login /> */}
          {/* <Register /> */}
          {/* <AddList /> */}
          {/* <AddCategory /> */}
          {/* <Detail /> */}
          {/* <List /> */}
          <Menu />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
