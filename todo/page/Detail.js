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
} from "native-base";

const Detail = () => {
  return (
    <Box w="100%" h="100%" display="flex" flex={1} alignItems="center ">
      <Box bg="#bae6fd" w="350" h="500" px="5" py="2" m="5">
        <Flex Flex direction="row-reverse">
          <Button bg="#38bdf8" size="xs" my={1} mx="1" w="50" h="1">
            Study
          </Button>
          {/* <Button bg="#38bdf8" size="xs" my={1} mx="1" w="50" h="1">
            Study
          </Button> */}
        </Flex>
        <Heading mb={10}>Study-Golang</Heading>
        <Text>Detail</Text>
        <Text>Date</Text>
      </Box>
    </Box>
  );
};

export default Detail;

const styles = StyleSheet.create({});
