import React, { useEffect, useState } from "react";
import { useChatState } from "../../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";
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
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);

  return (
    <div className="flex-col     space-y-2">
      <div className="flex justify-center m-2 p-2 ">
        <h2 className="text-blue-500 font-sans flex justify-center">
          My Chats
        </h2>
      </div>

      {chats && chats.length > 0 ? (
        chats.map((chat) => (
          <div
            key={chat._id}
            onClick={() => setSelectedChat(chat)}
            className={`p-3 font-sans  rounded-md cursor-pointer ${
              selectedChat?._id === chat._id
                ? "bg-gray-200 border   text-yellow-500"
                : "bg-gray-100 text-gray-700"
            } hover:bg-blue-400 hover:text-white`}
          >
            {chat.isGroupChat ? chat.chatName : chat.users[0].name}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No chats available</p>
      )}
    </div>
  );
};

export default MyChats;
