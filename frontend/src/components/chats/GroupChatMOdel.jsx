import React, { useState } from "react";
import { useChatState } from "../../Context/ChatProvider";
import { position, useToast } from "@chakra-ui/react";
import axios from "axios";

const GroupChatMOdel = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, chats, setChats } = useChatState();

  const toast = useToast();

  const handleSearch = async () => {
    setSearch(query);
    if (!query) return;

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${query}`, config);
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load search results",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      setLoading(false);
    }
  };

  const handleAddUser = (user) => {
    if (selectedUsers.find((u) => u._id === user._id)) {
      toast({
        title: "User already added",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    setSelectedUsers([...selectedUsers, user]);
  };

  const deleteUser = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u._id !== user._id));
  };

  const handleSubmit = async () => {
    if (!groupName || !selectedUsers) {
      toast({
        title: "PLease fill in the details",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.toke}`,
        },
      };

      const { data } = await axios.post(
        "/api/chats/group",
        {
          name: groupName,
          users: selectedUsers.map((u) => u._id),
        },
        config
      );
      setChats([data, ...chats]);
      toast({
        title: "New Group Created",
        status: "success",
        duration: 4000,
        isClosable: "true",
        position: "top-right",
      });
    } catch (error) {
      toast({
        title: "Error creating group chat",
        description:
          error.response?.data?.message || "Failed to create group chat",
        status: "error",
        duration: 4000,
        isClosable: "true",
        position: "top-right",
      });
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center z-5">
        <div className="bg-white rounded-md w-[30%] p-4 shadow-md">
          <h2 className="text-blue-500">Create Group Chat</h2>
          <input
            type="text"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-[60% mb-3 p-2 border rounded-md border-gray-200"
          />
          <input
            type="text"
            placeholder="Search for users"
            value={groupName}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-[60% mb-3 p-2 border rounded-md border-gray-200"
          />
          {loading ? (
            <div>Loading ...</div>
          ) : (
            <div className="flex flex-col m-2 p-2 ">
              {searchResults.map((user) => {
                <div
                  key={user._id}
                  className="flex items-center justify-between p-2 m-1 border"
                  onClick={() => handleAddUser(user)}
                >
                  <span>{user.name}</span>
                </div>;
              })}
              ;
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default GroupChatMOdel;
