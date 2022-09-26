import { View, Text } from "react-native";
import React from "react";
import Navigation from "./src/navigation/navigation";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />;
    </NativeBaseProvider>
  );
}
