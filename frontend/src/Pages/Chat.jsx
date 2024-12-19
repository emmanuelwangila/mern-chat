// import React, { useEffect } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useChatState } from "../Context/ChatProvider";

function Chat() {
  const { user } = useChatState();

  return (
    <div className="w-[100%] bg-slate-100 m-3 p-3 rounded-md text-blue-500">
      {user && <SideBar />}
      {user && <ChatBox />}
      {user && <ChatInputBody />}
    </div>
  );
}

export default Chat;
