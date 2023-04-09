import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Message from "./Message";
import React from "react";
import YouTube from "./pages/Player";
import Features from "./pages/Features";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Player from "./pages/Player";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#9146FF" }}>
        <NavBar />
      </div>
      <Routes>
        <Route path="Player" element={<Player />} />
        <Route path="Features" element={<Features />} />
        <Route path="HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
