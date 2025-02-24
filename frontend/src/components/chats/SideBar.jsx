import { React, useState } from "react";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadChat, setLoadChat] = useState();
  return (
    <div className="w-full h-full m-2 p-2">
      <input
        type="text"
        className="w-[20%] h-4 m-2 p-3 rounded-md "
        placeholder="search chats"
      ></input>
      <h1>SideBar</h1>
    </div>
  );
};

export default SideBar;
