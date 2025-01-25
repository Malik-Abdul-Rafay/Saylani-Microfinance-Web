import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compunent/Navbar";
import Home from "./pages/Home";
import Wedding from "./loan/weddingLoan";
import Form from "./loginDetail/Form";
import React from "react";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
