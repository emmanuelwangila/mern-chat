import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadChat, setLoadChat] = useState();

  return (
    <div className="w-full h-full m-2 p-2">
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[20%] h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search chats"
        />
      </div>
      <h1>SideBar</h1>
    </div>
  );
};

export default SideBar;
