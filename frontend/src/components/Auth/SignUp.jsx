import { FormControl, FormLabel, VStack, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [pic, setpic] = useState();

  return (
    <VStack spacing={"5px"} color={"gray.200"}>
      <FormControl id="FirstName" isRequired>
        <FormLabel></FormLabel>
        <Input
          placeholder={"Enter your Name"}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
};

export default SignUp;
