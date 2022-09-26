import { StyleSheet, View } from "react-native";
import * as React from "react";
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
import loginImg from "../../assets/Login.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const handleChanges = (title, value) => {
    setLogin({
      ...login,
      [title]: value,
    });
  };

  console.log(login);

  const handlelogin = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const body = JSON.stringify(login);
      setIsLogin(true);
      const res = await axios.post(
        "https://api.kontenbase.com/query/api/v1/1862eae5-48ba-4052-bfc8-a24876e43d66/auth/login",
        body,
        config
      );
      console.log(res);
      setIsLogin(false);
      if (res) {
        await AsyncStorage.setItem("token", res.data.token);
      }
      const value = await AsyncStorage.getItem("token");
      if (value != null) {
        console.log(value);
        navigation.navigate("List");
      }
      console.log(value);
    } catch (error) {
      console.log(error);
      alert(error.res.data.message);
    }
  };

  return (
    <Box w="100%" display="flex" flex={1} alignItems="center">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="100%" maxW="300">
          <Image
            source={loginImg}
            alt="Alternate Text"
            size="200"
            width={"500"}
          />

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

          <VStack space={4} mt="5">
            <FormControl bg="#e5e5e5" borderColor="#737373">
              <Input
                type="email"
                placeholder="Email"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
                borderRadius="5px"
                onChangeText={(value) => handleChanges("email", value)}
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
                onChangeText={(value) => handleChanges("password", value)}
              />
            </FormControl>
            <Button
              mt="8"
              colorScheme="indigo"
              bg="#ef4444"
              onPress={handlelogin}
            >
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
                <Text
                  bold
                  color="#ef4444"
                  onPress={() => navigation.navigate("Register")}
                >
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
