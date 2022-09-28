import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  VStack,
  Button,
  Text,
  Box,
  Heading,
  FormControl,
  Input,
  Select,
  CheckIcon,
  TextArea,
  Pressable,
} from "native-base";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddList = ({ navigation }) => {
  const [list, setList] = React.useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChanges = (title, value) => {
    setList({
      ...list,
      [title]: value,
    });
  };
  console.log(list);

  const handleAdd = async () => {
    try {
      const config = {
        Headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(list);
      const res = await axios.post(
        "https://api.kontenbase.com/query/api/v1/1862eae5-48ba-4052-bfc8-a24876e43d66/addlist",
        body,
        config
      );
      if (res) {
        await AsyncStorage.setItem("token", res.data.token);
      }
      const value = await AsyncStorage.getItem("token");
      if (value != null) {
        console.log(value);
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
      alert(error.res.data.message);
    }
  };
  return (
    <Box w="100%" display="flex" flex={1} alignItems="center" mx="5">
      <Box safeArea w="100%" maxW="500">
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
          Add List
        </Heading>
        <VStack space={4} mt="5">
          <FormControl bg="#e5e5e5" w="90%">
            <Input
              type="name"
              placeholder="Name"
              size="lg"
              variant="outline"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
              onChangeText={(value) => handleChanges("email", value)}
              value={form.name}
            />
          </FormControl>
          <FormControl bg="#e5e5e5" w="90%">
            <Select
              placeholder="Category"
              size="lg "
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            >
              <Select.Item label="To" value="To" />
              <Select.Item
                label="Do"
                value="Do"
                borderColor="#737373"
                borderWidth="1"
              />
            </Select>
          </FormControl>
          <FormControl bg="#e5e5e5" w="90%">
            <Input
              type="date"
              placeholder="Date: 12/12/2012"
              size="lg"
              variant="outline"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            />
          </FormControl>

          <FormControl
            bg="#e5e5e5"
            borderColor="#737373"
            borderWidth="1"
            borderRadius="5px"
            w="90%"
          >
            <TextArea
              // h={20}
              placeholder="Description"
              maxW="300"
              size="lg"
            />
          </FormControl>
          <Button
            mt="8"
            colorScheme="indigo"
            bg="#ef4444"
            onPress={() => navigation.navigate("List")}
            w="90%"
          >
            <Text bold color="white" fontSize="16px">
              Add List
            </Text>
          </Button>
        </VStack>
      </Box>
      {/* <Menu /> */}
    </Box>
  );
};

export default AddList;

const styles = StyleSheet.create({});
