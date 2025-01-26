import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./compunent/Navbar";
import Home from "./pages/Home";
import Wedding from "./loan/weddingLoan";
import Form from "./loginDetail/Form";
import React from "react";
import ConstructionLoan from "./loan/constructionLoan";
import BuisnessLoan from "./loan/buisnessLoan";
import EducationLoan from "./loan/educationLoan";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/construction" element={<ConstructionLoan />} />
        <Route path="/businesss" element={<BuisnessLoan />} />
        <Route path="/education" element={<EducationLoan />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
