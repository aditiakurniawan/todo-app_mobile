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
} from "native-base";
// import Menu from "../components/Menu";

const AddCategory = ({ navigation }) => {
  return (
    <Box w="100%" mx="5" safeAreaTop>
      <Heading
        mt={10}
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        bold
        _dark={{
          color: "warmGray.50",
        }}
      >
        Add Category
      </Heading>
      <VStack space={4} mt="5">
        <FormControl bg="#e5e5e5" borderColor="#737373" borderRadius="5px">
          <Input
            type="name"
            placeholder="Name"
            size="lg"
            borderColor="#737373"
            borderWidth="1"
            w="90%"
          />
        </FormControl>
        <Button
          mt="2"
          mb="10"
          colorScheme="indigo"
          bg="#ef4444"
          w="90%"
          onPress={() => navigation.navigate("AddList")}
        >
          <Text bold color="white" fontSize="16px">
            Add Category
          </Text>
        </Button>
        <Heading>List Category</Heading>
        <HStack>
          <Button size="xs" my={1} mx="1" bg="#67e8f9">
            Study
          </Button>
          <Button size="xs" my={1} mx="1" bg="#fda4af">
            Home Work
          </Button>
          <Button size="xs" my={1} mx="1" bg="#fdba74">
            Workout
          </Button>
        </HStack>
      </VStack>
      {/* <Menu /> */}
    </Box>
  );
};

export default AddCategory;

const styles = StyleSheet.create({});
