// import React, { useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useChatState } from "../Context/ChatProvider";
import SideBar from "../components/chats/SideBar";
import MyChats from "../components/chats/MyChats";
import ChatInputBody from "../components/chats/ChatInputBody";
function Chat() {
  const { user } = useChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div className="w-full h-screen overflow-hidden    fot-sans  bg-slate-100 m-3 p-3 rounded-md text-blue-500">
      <div className="flex justify-start m-2 p-2 rounded-md ">
        {user && <SideBar />}
      </div>

      <div className="w-full flex flex-col p-4">
        {/* MyChats and ChatInputBody in flex layout */}
        <div className="flex h-full">
          {/* MyChats */}
          <div className="w-2/5 bg-green-300 rounded-md shadow-md p-4 overflow-y-auto">
            {user && (
              <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            )}
          </div>

          {/* ChatInputBody */}
          <div className="w-3/5 bg-white rounded-md shadow-md p-4 ml-4 overflow-y-auto">
            {user && (
              <ChatInputBody
                fetchAgain={fetchAgain}
                setFetchAgain={setFetchAgain}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
