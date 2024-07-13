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
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please select an Image",
        description: "add a  profile pic",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (pics.type === "image/png" || "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "mern-chat-app");
      data.append("cloud_name", "drwhws1cc");
      fetch("https://api.cloudinary.com/v1_1/drwhws1cc/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json)
        .then((data) => {
          setPic(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please select an Image",
        description: "add a  profile pic",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
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
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );

      toast({
        title: "Complete Registartion",
        description: "Regestration succesfully",
        status: "succes",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);

      localStorage.setItem("userInfo", JSON.stringify(data));
      history.push("/chats");
    } catch (error) {
      console.error("error posting the data");
    }
  };

  return (
    <VStack spacing={"5px"} color={"gray.500"}>
      <FormControl id="FirstName" isRequired>
        <FormLabel className="text-blue-500 font-sans "> Name </FormLabel>
        <Input
          placeholder={"Enter your Name"}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="Email" isRequired>
        <FormLabel className="text-blue-500 font-sans "> Email </FormLabel>
        <Input
          placeholder={"Enter your Email address"}
          onChange={(e) => setemail(e.target.value)}
        />
      </FormControl>
      <FormControl id="Password" isRequired>
        <FormLabel className="text-blue-500 font-sans "> Password </FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            placeholder={"Enter your Password"}
            onChange={(e) => setpassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.5rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id="Password" isRequired>
        <FormLabel className="text-blue-500 font-sans "> Password </FormLabel>
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            placeholder={"Confirm  Password"}
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button h={"1.5rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel className="text-blue-500 font-sans ">
          Add your profile pic
        </FormLabel>
        <Input
          type="file"
          p={"1.5px"}
          accept="image*/"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>

      <button
        onClick={submitHandler}
        loading={loading}
        className="bg-green-500 justify-center   m-2 p-3 text-white  flex rounded-md font-sans w-full   mx-auto"
      >
        {" "}
        Sign Up{" "}
      </button>
    </VStack>
  );
};

export default SignUp;
