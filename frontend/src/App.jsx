// import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/chats" />
      <Route path="/" />
    </div>
  );
}

export default App;
