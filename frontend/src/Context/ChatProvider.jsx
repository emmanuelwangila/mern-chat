import { connect } from "mongoose";
import { createContext } from "react";

const chatContext = createContext();

const chatProvider = ({ children }) => {
  <chatContext.Provider>{children}</chatContext.Provider>;
};

export default connect(chatProvider);
