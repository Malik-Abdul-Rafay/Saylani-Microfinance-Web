import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compunent/Navbar";
import Home from "./pages/Home";
import React from "react";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
