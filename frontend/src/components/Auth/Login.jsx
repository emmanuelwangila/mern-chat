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
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setconfirmPassword] = useState();
  const toast = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleClick = () => setShow(!show);

  const postDetails = (pic) => {};

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password || !confirmpassword) {
      toast({
        title: "Please fill in the details",
        description: "add email, password, name",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/JSON",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Complete Login",
        description: "You have SUccesfully logged In",
        status: "succes",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("UserINfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error  Login",
        description: "Something went wrong try again",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
      console.error("error logging in");
    }
  };

  return (
    <div spacing={"5px"} color={"gray.500"}>
      <FormControl id="Email" isRequired>
        <FormLabel> Email </FormLabel>
        <Input
          placeholder={"Enter your Email address"}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel> Password </FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            placeholder={"Enter your Password"}
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.5rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <button className="bg-blue-500 m-2 p-3 text-red-500 flex justify-center ">
        {" "}
        Sign In{" "}
      </button>
    </div>
  );
};

export default Login;
