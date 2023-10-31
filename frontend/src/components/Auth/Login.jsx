import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmPassword] = useState();

  const handleClick = () => setShow(!show);

  const postDetails = (pic) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"} color={"gray.500"}>
      <FormControl id="Email" isRequired>
        <FormLabel> Email </FormLabel>
        <Input
          placeholder={"Enter your Email address"}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel> Password </FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            placeholder={"Enter your Password"}
            onChange={(e) => setName(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.5rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="Password" isRequired>
        <FormLabel> Password </FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            placeholder={"Confirm  Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.5rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        w={"100%"}
        justifyContent={"center"}
        colorScheme="blue"
        borderRadius={"5px"}
        textColor={"white"}
        onClick={submitHandler}
      >
        Sign In
      </Button>
    </VStack>
  );
};

export default Login;
