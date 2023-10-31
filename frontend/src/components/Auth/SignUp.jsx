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

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [pic, setpic] = useState();

  const handleClick = () => setShow(!show);

  return (
    <VStack spacing={"5px"} color={"gray.500"}>
      <FormControl id="FirstName" isRequired>
        <FormLabel> Name </FormLabel>
        <Input
          placeholder={"Enter your Name"}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
            onChange={(e) => setName(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.5rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </VStack>
  );
};

export default SignUp;
