import React, { useState } from "react";
import { useChatState } from "../../Context/ChatProvider";
import { position, useToast } from "@chakra-ui/react";
import axios from "axios";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();

  const { selectedChat, setSelectedChat, chats, setChats, user } =
    useChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chats", config);
      setChats(data);
    } catch (error) {
      console.error("Error fetching the chats"),
        toast({
          title: "Error fetching chats",
          description: "Failed to fetch the chats",
          status: "error",
          duration: 4000,
          isClosable: "true",
          position: "top-right",
        });
    }
  };

  return (
    <div className="text-blue-500">
      <h1>My Chats</h1>
    </div>
  );
};

export default MyChats;
