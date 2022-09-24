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
  Select,
  CheckIcon,
  TextArea,
  Pressable,
} from "native-base";

const AddList = () => {
  return (
    <Box w="100%" display="flex" flex={1} alignItems="center">
      <Box safeArea p="2" py="8" w="100%" maxW="500">
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
          AddList
        </Heading>
        <VStack space={4} mt="5">
          <FormControl bg="#e5e5e5">
            <Input
              type="name"
              placeholder="Name"
              size="lg"
              variant="outline"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            />
          </FormControl>
          <FormControl bg="#e5e5e5">
            <Select
              placeholder="Category"
              size="lg "
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            >
              <Select.Item label="UX Research" value="ux" />
              <Select.Item
                label="Web Development"
                value="web"
                borderColor="#737373"
                borderWidth="1"
              />
            </Select>
          </FormControl>
          <FormControl bg="#e5e5e5">
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
          >
            <TextArea
              // h={20}
              placeholder="Description"
              w="100%"
              maxW="300"
              size="lg"
            />
          </FormControl>
          <Button mt="8" colorScheme="indigo" bg="#ef4444">
            <Text bold color="white" fontSize="16px">
              Add List
            </Text>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default AddList;

const styles = StyleSheet.create({});
