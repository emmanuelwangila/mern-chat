import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadChat, setLoadChat] = useState();

  return (
    <div className="flex w-full h-full m-2 p-2">
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[60%] h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search chats font-sans "
        />
      </div>
      <div className="text-yellow-500 m-1 font-sans  p-3 ">Bumble Chat</div>
    </div>
  );
};

export default SideBar;
