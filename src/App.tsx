import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Message from "./Message";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Message />
    </div>
  );
}

export default App;
