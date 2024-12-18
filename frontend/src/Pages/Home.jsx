import React, { useEffect } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Home() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (user) {
      history.push("/chats");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        bg="white"
        m="5px"
        p="15px"
        borderRadius={"md"}
        textColor={"blue.500"}
        w="100%"
      >
        <Text
          justifyContent={"center"}
          textAlign={"center"}
          fontWeight={"bold"}
          mx={"auto"}
        >
          {" "}
          Kujuana Chat
        </Text>
      </Box>

      <Box
        bg={"white"}
        m={"5px"}
        p={"20px"}
        borderRadius={"5px"}
        fontWeight={"bold"}
        justifyContent={"center"}
        w={"100%"}
        color={"black"}
        fontFamily={"monospace"}
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList mb={"1em"}>
            <Tab
              w={"50%"}
              color={"blue.500"}
              className="border border-blue-500 rounded-md m-2 "
            >
              Sign-In
            </Tab>
            <Tab
              w={"50%"}
              color={"teal.500"}
              className="border border-blue-500 m-2  "
            >
              Sign -Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Home;
