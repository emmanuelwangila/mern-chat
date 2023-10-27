// import React, { useEffect } from "react";
import axios from "axios";

function Chat() {
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
  };

  fetchChats();

  return <div>Chat</div>;
}

export default Chat;
