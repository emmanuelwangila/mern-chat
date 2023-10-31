import { FormControl, FormLabel, VStack, Input } from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [pic, setpic] = useState();

  return (
    <VStack spacing={"5px"}>
      <FormControl>
        <FormLabel></FormLabel>
        <Input placeholder={"Enter your Name"} />
      </FormControl>
    </VStack>
  );
};

export default SignUp;
