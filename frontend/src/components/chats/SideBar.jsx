import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadChat, setLoadChat] = useState();

  return (
    <div className="lg:flex-col md:flex-col sm:flex-wrap  w-full h-full m-2 p-2">
      <div className="text-yellow-500 m-1 flex justify-center  font-sans  p-1 ">
        Bumble Chat
      </div>
      <div className="relative ">
        <FaSearch className="left-3 absolute m-4 p-0.5   transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[30%] h-10 pl-12  font-sans rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search chats  "
        />
      </div>
    </div>
  );
};

export default SideBar;
