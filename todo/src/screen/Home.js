import { StyleSheet } from "react-native";
import React from "react";
import home from "../../assets/home.png";
import ways from "../../assets/WaysToDo.png";
import { VStack, Image, Center, Button, Text, Box } from "native-base";
import { TouchableOpacity } from "react-native-web";

const Home = ({ navigation }) => {
  return (
    <Box w="100%" display="flex" flex={1} alignItems="center" mt={10}>
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
        <VStack space={4} mt={9} justifyContent="center" alignItems="center">
          <Button
            bg="#ef4444"
            width={"320"}
            height={"10"}
            onPress={() => navigation.navigate("Login")}
          >
            <Text bold color="white" fontSize="16px">
              Login
            </Text>
          </Button>

          <Button
            bg="#a3a3a3"
            width={"320"}
            height={"10"}
            onPress={() => navigation.navigate("Register")}
          >
            <Text bold color="white" fontSize="16px">
              Register
            </Text>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({});
