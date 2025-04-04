import React, { useState } from "react";
import { useChatState } from "../../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const GroupChatModel = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, chats, setChats } = useChatState();
  const toast = useToast();

  const handleSearch = async (query) => {
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
    if (!groupName || selectedUsers.length === 0) {
      toast({
        title: "Please fill in the details",
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
          Authorization: `Bearer ${user.token}`,
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
        isClosable: true,
        position: "top-right",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error creating group chat",
        description:
          error.response?.data?.message || "Failed to create group chat",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-md w-[30%] p-4 shadow-md">
          <h2 className="text-blue-500 font-sans  mb-4">Create Group Chat</h2>
          <input
            type="text"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full mb-2 p-1 font-sans  border rounded-md border-gray-200"
          />
          <input
            type="text"
            placeholder="Search for users"
            value={search} // Correct binding
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full mb-2  font-sans p-1 border rounded-md border-gray-200"
          />
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="flex font-sans  flex-col m-2 p-2">
              {searchResults.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center font-sans  justify-between p-2 m-1 rounded-md  border cursor-pointer hover:bg-gray-100"
                  onClick={() => handleAddUser(user)}
                >
                  <span>{user.name}</span>
                </div>
              ))}
            </div>
          )}
          <div className="bg-gray-300 rounded-md font-sans   flex flex-col m-2 p-2">
            <h3 className="m-2 p-2 text-blue-500 font-sans">Selected Users</h3>
            <div className="flex flex-wrap">
              {selectedUsers.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center bg-blue-500 text-white rounded-md px-2 py-1 m-1"
                >
                  <span>{user.name}</span>
                  <button
                    className="ml-2 text-sm text-white bg-red-500 rounded-md px-2"
                    onClick={() => deleteUser(user)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex font-sans  justify-end mt-4">
            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-3 py-2 rounded-md"
            >
              Create Group
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default GroupChatModel;
