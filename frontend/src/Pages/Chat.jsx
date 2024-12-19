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
    <div className="w-[100%] bg-slate-100 m-3 p-3 rounded-md text-blue-500">
      {user && <SideBar />}
      {user && <MyChats />}
      {user && <ChatInputBody />}
    </div>
  );
}

export default Chat;
