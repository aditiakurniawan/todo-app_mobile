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
import login from "../assets/Login.png";

const Login = () => {
  return (
    <Box w="100%" display="flex" flex={1} alignItems="center">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="100%" maxW="300">
          <Image source={login} alt="Alternate Text" size="200" width={"500"} />

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
            Login
          </Heading>
          {/* <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading> */}

          <VStack space={4} mt="5">
            <FormControl bg="#e5e5e5" borderColor="#737373">
              <Input
                type="email"
                placeholder="Email"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
                borderRadius="5px"
              />
            </FormControl>
            <FormControl bg="#e5e5e5">
              <Input
                type="password"
                placeholder="Password"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
                borderRadius="5px"
              />
            </FormControl>
            <Button mt="8" colorScheme="indigo" bg="#ef4444">
              <Text bold color="white" fontSize="16px">
                Sign in
              </Text>
            </Button>
            <HStack justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                New User ?{" "}
              </Text>
              <Link
                _text={{
                  color: "#ef4444",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                <Text bold color="#ef4444">
                  Register
                </Text>
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Login;

const styles = StyleSheet.create({});
