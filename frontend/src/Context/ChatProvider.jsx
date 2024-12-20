import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // Correct import for useHistory in v5

const chatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const history = useHistory(); // Use useHistory for navigation in v5

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      history.push("/"); // Navigate using history.push
    }
  }, [history]);

  return (
    <chatContext.Provider value={{ user, setUser }}>
      {children}
    </chatContext.Provider>
  );
};

export const useChatState = () => {
  return useContext(chatContext);
};

export default ChatProvider;
