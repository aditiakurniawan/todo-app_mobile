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
  Flex,
  CircleIcon,
} from "native-base";

const Detail = () => {
  return (
    <Box w="100%" h="100%" display="flex" flex={1} alignItems="center ">
      <Box bg="#e0f2fe" w="350" h="550" px="5" py="2" m="5">
        <Flex Flex direction="row-reverse">
          <Button bg="#7dd3fc" size="xs" mx="1" w="50" py="1">
            Study
          </Button>
          {/* <Button bg="#38bdf8" size="xs" my={1} mx="1" w="50" h="1">
            Study
          </Button> */}
        </Flex>
        <HStack space={24}>
          <Heading mb={10}>Study-Golang</Heading>
          <CircleIcon
            mt={4}
            color="#d4d4d4"
            size="35"
            //   pl="1"
          ></CircleIcon>
        </HStack>
        <Text color="#a3a3a3">Detail</Text>
        <Text color="#a3a3a3">
          Learn Golang to improve fundamentals and familiarize with coding.
           Advantages of Go Go has advantages over other languages, including:
          Supports concurrency at the language level with fairly easy
          application Supports data processing with multiple processors at the
          same time (parallel processing) Have a garbage collector The
          compilation process is very fast It's not a hierarchical programming
          language and it's not strict OOP, giving developers the freedom to how
          to write code.  Listing Material : Installation Setup Go Modules Setup
          Gopath & Workspace Go Command Hello World Variable Tipe DataKonstanta
          Operator Condition Loops
        </Text>
      </Box>
    </Box>
  );
};

export default Detail;

const styles = StyleSheet.create({});
