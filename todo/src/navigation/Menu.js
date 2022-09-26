import { StyleSheet, View } from "react-native";
import React from "react";
import {
  VStack,
  Image,
  Center,
  HStack,
  Button,
  Text,
  Box,
  Heading,
  FormControl,
  Input,
  Link,
  Pressable,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const Menu = () => {
  return (
    <Box style={styles.shadowProp} w="100%" safeAreaBottom position="fixed">
      <HStack>
        <Box w="120" h="60" py="4">
          <Center>
            <FontAwesome5 name="clipboard-list" size={35} color="#d4d4d4" />
          </Center>
        </Box>
        <Box w="120" h="60" py="4">
          <Center>
            <MaterialCommunityIcons
              name="text-box-check"
              size={35}
              color="#d4d4d4"
            />
          </Center>
        </Box>
        <Box w="120" h="60" py="4">
          <Center>
            <FontAwesome5 name="shapes" size={35} color="#d4d4d4" />
          </Center>
        </Box>
      </HStack>
    </Box>
  );
};

export default Menu;

const styles = StyleSheet.create({
  shadowProp: {
    shadowOffset: { width: 0, height: -4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
