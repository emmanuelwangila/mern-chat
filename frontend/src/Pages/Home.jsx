import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

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
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Home;
