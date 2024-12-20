import { React, useState } from "react";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <div className="m-2 ">
      <h1>SideBar</h1>
    </div>
  );
};

export default SideBar;
