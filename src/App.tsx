import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Message from "./Message";
import React from "react";
import YouTube from "./pages/YouTube";
import Features from "./pages/Features";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#9146FF" }}>
        <NavBar />
      </div>
      <Routes>
        <Route path="YouTube" element={<YouTube />} />
        <Route path="Features" element={<Features />} />
      </Routes>
    </Router>
  );
}

export default App;
