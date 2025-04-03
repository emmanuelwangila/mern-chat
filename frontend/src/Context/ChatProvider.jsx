import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // Correct import for useHistory in v5

const chatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState();
  const history = useHistory(); // Use useHistory for navigation in v5

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setUser(userInfo);
    }
  });

  return (
    <chatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const useChatState = () => {
  return useContext(chatContext);
};

export default ChatProvider;
