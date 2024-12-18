import { connect } from "mongoose";
import { createContext, useContext, useState } from "react";

const chatContext = createContext();

const chatProvider = ({ children }) => {
  <chatContext.Provider>{children}</chatContext.Provider>;
};

export const chatState = () => {
  useContext(chatContext);
};

export default connect(chatProvider);
