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

const Register = () => {
  return (
    <View>
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
            Register
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
              {/* <FormControl.Label>Email ID</FormControl.Label> */}
              <Input type="email" placeholder="Email" size="lg" />
            </FormControl>
            <FormControl bg="#e5e5e5">
              <Input type="name" placeholder="Name" size="lg" />
            </FormControl>
            <FormControl bg="#e5e5e5">
              <Input type="password" placeholder="Password" size="lg" />
            </FormControl>
            <Button mt="8" colorScheme="indigo" bg="#ef4444">
              <Text bold color="white">
                Register
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
                Joined us before ?{" "}
              </Text>
              <Link
                _text={{
                  color: "#ef4444",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
                bold
              >
                <Text bold color="#ef4444">
                  Login
                </Text>
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
      ;
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
