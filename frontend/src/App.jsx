// import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chat} />
      <Route path="/" />
    </div>
  );
}

export default App;
