import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/SearchBook";
import Branch from "./components/SearchBranch";
import SubjectsPage from "./components/SubjectSelect";
import Content from "./components/Content";
import SubjectDetails from "./components/SubjectDetails";
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/branch-year" element={<Branch />} />
          <Route path="/subjects" element={<SubjectsPage />} />
          <Route path="/content" element={<Content />} />
          <Route path="/subject-details" element={<SubjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
