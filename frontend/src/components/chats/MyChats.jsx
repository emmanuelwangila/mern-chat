import React, { useEffect, useState } from "react";
import { useChatState } from "../../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import GroupChatMOdel from "./GroupChatMOdel";

import { getSender } from "../../config/ChatLogic";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const [groupChatOpen, setGroupChatOpen] = useState(false);
  const { selectedChat, setSelectedChat, chats, setChats, user } =
    useChatState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chats", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error fetching chats",
        description: "Failed to fetch the chats",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("UserInfo")));
    fetchChats();
  }, []);

  return (
    <div className="flex-col     space-y-2">
      <div className="flex justify-between  m-2 p-2 ">
        <h2 className="text-blue-500 text-sm  font-sans flex justify-center">
          My Chats
        </h2>
        <button className="flex text-sm font-sans m-1    justify-end border border-2 rounded-md text-white bg-blue-500  m-1 ">
          New Group Chat +
        </button>
      </div>

      {chats && chats.length > 0 ? (
        chats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => setSelectedChat(chat)}
            className={`p-2 font-sans  rounded-md cursor-pointer ${
              selectedChat?._id === chat._id
                ? "bg-blue-500 border   text-white"
                : "bg-gray-100 text-gray-700"
            } hover:bg-blue-300 hover:text-white`}
          >
            {!chat.isGroupChat
              ? getSender(loggedUser, chat.users)
              : chat.chatName}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No chats available</p>
      )}
    </div>
  );
};

export default MyChats;
