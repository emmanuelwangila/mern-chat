import { connect } from "mongoose";
import { createContext, useContext, useState } from "react";

const chatContext = createContext();

const chatProvider = ({ children }) => {
  const [user, setUser] = useState();

  <chatContext.Provider value={{ user, setUser }}>
    {children}
  </chatContext.Provider>;
};

export const chatState = () => {
  useContext(chatContext);
};

export default connect(chatProvider);
