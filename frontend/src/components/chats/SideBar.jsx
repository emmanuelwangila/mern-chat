import { React, useState } from "react";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <div className="m-2 ">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="p-2 rounded-md w-full"
        />
      </div>
      <div className="mt-2">
        <button
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setSearchResults([
                "Chat 1",
                "Chat 2",
                "Chat 3",
                "Chat 4",
                "Chat 5",
              ]);
            }, 2000);
          }}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="mt-2">
        {loading && <p>Loading...</p>}
        {!loading &&
          searchResults.map((result, idx) => (
            <div
              key={idx}
              className="bg-blue-100 p-2 rounded-md mt-2 cursor-pointer"
              onClick={() => {
                setLoadingChat(true);
                setTimeout(() => {
                  setLoadingChat(false);
                }, 2000);
              }}
            >
              {result}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
