import { connect } from "mongoose";
import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const chatContext = createContext();

const chatProvider = ({ children }) => {
  const [user, setUser] = useState();

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  <chatContext.Provider value={{ user, setUser }}>
    {children}
  </chatContext.Provider>;
};

export const chatState = () => {
  useContext(chatContext);
};

export default connect(chatProvider);
