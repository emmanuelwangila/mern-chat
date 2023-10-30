import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
function Home() {
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
            <Tab w={"50%"} color={"blue.500"}>
              Sign-In
            </Tab>
            <Tab w={"50%"} color={"teal.500"}>
              Sign -Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <SignUp />
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Home;
