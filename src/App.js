import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/SearchBook";
import Branch from "./components/SearchBranch";
import SubjectsPage from "./components/SubjectSelect";
import Content from "./components/Content";
import SubjectDetails from "./components/SubjectDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navbar */}
        <NavBar />

        {/* Main Page Wrapper */}
        <main className="page-container">
          <div className="content-card">
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/branch-year" element={<Branch />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/content" element={<Content />} />
              <Route path="/subject-details" element={<SubjectDetails />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>📚 Pustak Ghar — Learn Better, Faster</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
