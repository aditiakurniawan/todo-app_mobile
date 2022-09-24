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
} from "native-base";

const AddList = () => {
  return (
    <View>
      <Center w="100%">
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
              />
            </FormControl>
            <FormControl bg="#e5e5e5">
              <Select placeholder="Category" size="lg">
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
              </Select>
            </FormControl>
            <FormControl bg="#e5e5e5">
              <Input
                type="date"
                placeholder="Date: 12/12/2012"
                size="lg"
                variant="outline"
              />
            </FormControl>

            <FormControl bg="#e5e5e5">
              <TextArea
                // h={20}
                placeholder="Description"
                w="100%"
                maxW="300"
                size="lg"
              />
            </FormControl>
            <Button mt="8" colorScheme="indigo" bg="#ef4444">
              <Text bold color="white">
                AddList
              </Text>
            </Button>
          </VStack>
        </Box>
      </Center>
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({});
