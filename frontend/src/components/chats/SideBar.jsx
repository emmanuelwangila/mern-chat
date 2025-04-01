import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { useChatState } from "../../Context/ChatProvider";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadChat, setLoadChat] = useState();

  const { user } = useChatState();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <FaUserPlus
            className="m-2 cursor-pointer"
            onClick={toggleDropdown}
            name={user.name}
            src={user.pic}
          />
          {isDropdownOpen && (
            <div
              className="absolute right-0 bg-white shadow-md rounded-md p-2 w-40 text-sm z-10"
              onMouseLeave={closeDropdown}
            >
              <ul>
                <li className="cursor-pointer hover:bg-gray-100 p-1 flex items-center">
                  <img
                    src={user.pic}
                    className="w-5 h-5 rounded-full mr-2"
                    alt="profile"
                  />
                  My Profile
                </li>
                <li className="cursor-pointer hover:bg-gray-100 p-1 flex items-center">
                  LogOut
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="relative m-1">
        <FaSearch className="left-3 absolute m-4 p-0.5 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[30%] h-10 pl-12 font-sans rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search chats"
        />
      </div>
    </div>
  );
};

export default SideBar;
