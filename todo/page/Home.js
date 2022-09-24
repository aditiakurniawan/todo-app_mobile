import { StyleSheet, View } from "react-native";
import React from "react";
import home from "../assets/home.png";
import ways from "../assets/ways ToDo.png";
import { VStack, Image, Center, HStack, Button, Text } from "native-base";

const Home = () => {
  return (
    <View>
      <Center>
        <VStack space={1}>
          <Image source={home} alt="Alternate Text" size="228" />
          <Image
            source={ways}
            alt="Alternate Text"
            height={"9"}
            width={"199"}
          />
        </VStack>
        <VStack space={1} alignItems="center" mt={9} mb={9}>
          <Text>Write your activity and finish your activity.</Text>
          <Text> Fast, Simple and Easy to Use</Text>
        </VStack>
        <VStack space={4} mt={9}>
          <Button bg="#ef4444" width={"320"} height={"10"}>
            <Text bold color="white">
              Login
            </Text>
          </Button>
          <Button bg="#a3a3a3" width={"320"} height={"10"}>
            <Text bold color="white">
              Register
            </Text>
          </Button>
        </VStack>
      </Center>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
