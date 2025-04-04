// import React, { useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useChatState } from "../Context/ChatProvider";
import SideBar from "../components/chats/SideBar";
import MyChats from "../components/chats/MyChats";
import ChatInputBody from "../components/chats/ChatInputBody";
function Chat() {
  const { user } = useChatState();

  return (
    <div className="w-full h-screen overflow-hidden    fot-sans  bg-slate-100 m-3 p-3 rounded-md text-blue-500">
      <div className="flex justify-start m-2 p-2 rounded-md ">
        {user && <SideBar />}
      </div>

      <div className="flex  justify-between m-2 p-2    rounded-md bg-white rounded-md text-byellow -500">
        {user && <MyChats />}
      </div>
      <div className="flex   justify-between m-2 p-2    rounded-md bg-white rounded-md text-byellow -500">
        {user && <ChatInputBody />}
      </div>
    </div>
  );
}

export default Chat;
