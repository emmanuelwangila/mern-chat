import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useChatState } from "../../Context/ChatProvider";
import ProfileModel from "./ProfileModel";
import UserListItem from "./UserListItem";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [filteredChats, setFilteredChats] = useState([]);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useChatState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const history = useHistory();
  const toast = useToast();

  const logOut = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something in search",
        description: "Type to search",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);
      setLoading(false);
      setFilteredChats(data); // Store filtered chats
    } catch (error) {
      console.error("Error searching results for the user");
      toast({
        title: "Error searching for the user",
        description: "User search error",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "bottom-left",
      });
      setLoading(false);
    }
  };

  const accesChats = (userId) => {};

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="lg:flex-col md:flex-col sm:flex-wrap w-full h-full m-2 p-2">
      <div className="w-full text-yellow-500 m-1 bg-white mouse-pointer rounded-md flex justify-between items-center font-sans">
        <div className="flex-1 text-center">
          <span className="font-bold text-lg">Bumble Chat</span>
        </div>
        <div className="flex justify-end items-center space-x-4 relative">
          <FaBell className="m-2" />
          {user && (
            <FaUserPlus
              className="m-2 cursor-pointer"
              onClick={toggleDropdown}
              name={user.name}
              src={user.pic}
            />
          )}

          {isDropdownOpen && (
            <div
              className="absolute right-0 bg-white shadow-md rounded-md p-2 w-40 text-sm z-10"
              onMouseLeave={closeDropdown}
            >
              <ul>
                <li
                  className="cursor-pointer hover:bg-gray-100 p-1 flex items-center"
                  onClick={() => setIsProfileOpen(true)}
                >
                  <img
                    src={user.pic}
                    className="w-5 h-5 rounded-full mr-2"
                    alt="profile"
                  />
                  My Profile
                </li>
                <ProfileModel
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                />
                <li
                  className="cursor-pointer hover:bg-gray-100 p-1 flex items-center"
                  onClick={logOut}
                >
                  LogOut
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="relative m-1">
        <FaSearch
          className="left-3 absolute m-4 p-0.5 transform -translate-y-1/2 text-gray-400"
          onClick={() => setSearchModalOpen(true)}
        />
        {isSearchModalOpen && (
          <div className="" onClick={() => setSearchModalOpen(false)}></div>
        )}

        {!isSearchModalOpen && (
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)} // Update the search input
            value={search}
            className="w-[30%] h-6 pl-12 font-sans rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search chats"
          />
        )}

        {isSearchModalOpen && (
          <div className="w-[35%] h-screen rounded-md bg-white p-4 shadow-md z-20">
            <div className="flex justify-between items-center">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)} // Update the search input
                value={search}
                className="w-full h-5 pl-4 font-sans rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Search chats"
              />

              <button
                onClick={handleSearch}
                className="m-1 fixed top-12 mr-10  p-1 text-sm text-white rounded-md bg-blue-500"
              >
                Search
              </button>

              {loading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  {filteredChats.map((user) => (
                    <UserListItem
                      key={user._id}
                      user={user}
                      handleChats={() => accesChats(user._id)}
                    />
                  ))}
                </div>
              )}

              <button
                onClick={() => setSearchModalOpen(false)}
                className="ml-2 bg-red-500 text-white p-2 rounded-md"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
