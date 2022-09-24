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

const Detail = () => {
  return (
    <View>
      <Box bg="#fdba74" w="350" h="500">
        <Text>Detail</Text>
        <Center my="4">
          <Pressable
            _pressed={{
              bg: "primary.800",
            }}
            bg="primary.600"
            py="2"
            rounded="sm"
            px="3"
            alignSelf="center"
          >
            <Text textTransform="uppercase" fontWeight="bold" color="white">
              Pressed
            </Text>
            <Text>lore</Text>
          </Pressable>
        </Center>
        ;
      </Box>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
