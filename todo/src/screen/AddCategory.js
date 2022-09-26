import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  VStack,
  HStack,
  Button,
  Text,
  Box,
  Heading,
  FormControl,
  Input,
} from "native-base";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddCategory = ({ navigation }) => {
  const [category, setCategory] = useState([]);
  const [AddCategory, setAddCategory] = useState({ name: "" });

  const handleChanges = (name, value) => {
    setAddCategory({
      ...AddCategory,
      [name]: value,
    });
  };

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        navigation.navigate("Login");
      }
      const config = {
        Headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token,
        },
      };
      const res = await axios.get(
        "https://api.kontenbase.com/query/api/v1/1862eae5-48ba-4052-bfc8-a24876e43d66/category",
        config
      );
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [AddCategory]);

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        navigation.navigate("Home");
      }
      const config = {
        Headers: {
          "Content-type": "application/json",
          Authorization: "Bearer" + token,
        },
      };
      const body = JSON.stringify(AddCategory);
      const res = await axios.post(
        "https://api.kontenbase.com/query/api/v1/1862eae5-48ba-4052-bfc8-a24876e43d66/category",
        body,
        config
      );
      console.log(res);

      if (res) {
        await AsyncStorage.setItem("token", res.data.token);
      }
      console.log(res);
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        navigation.navigate("AddCategory");
      }
      console.log(value);
    } catch (error) {
      console.log(error);
      alert(error.res.data.message);
    }
  };

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
            type="text"
            placeholder="Input Category"
            size="lg"
            borderColor="#737373"
            borderWidth="1"
            w="90%"
            onChangeText={(value) => handleChanges("name", value)}
          />
        </FormControl>
        <Button
          mt="2"
          mb="10"
          colorScheme="indigo"
          bg="#ef4444"
          w="90%"
          onPress={handleSubmit}
        >
          <Text bold color="white" fontSize="16px">
            Add Category
          </Text>
        </Button>
        <Heading>List Category</Heading>
        <HStack>
          {category.map((item, index) => {
            return (
              <Button key={item._id} size="xs" my={1} mx="1" bg="#67e8f9">
                {item?.name}
              </Button>
            );
          })}
          <Button size="xs" my={1} mx="1" bg="#fda4af">
            Home Work
          </Button>
          <Button size="xs" my={1} mx="1" bg="#fdba74">
            Workout
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default AddCategory;

const styles = StyleSheet.create({});
