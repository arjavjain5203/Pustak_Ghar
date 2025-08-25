import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/SearchBook";
import Branch from "./components/SearchBranch";
import SubjectsPage from "./components/SubjectSelect";
import Content from "./components/Content";
import SubjectDetails from "./components/SubjectDetails";
import FAQ from "./components/FAQ"; 

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Upload from "./components/Upload";
import About from "./components/About";
import Contribute from "./components/Contribute";
import More from "./components/More";

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
              <Route
                path="/"
                element={
                  <>
                    <Search />
                    <FAQ />
                  </>
                }
              />
              <Route path="/" element={<Search />} />
              <Route path="/branch-year" element={<Branch />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/content" element={<Content />} />
              <Route path="/subject-details" element={<SubjectDetails />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/about" element={<About />} />
              <Route path="/more" element={<More />} />
              <Route path="/contribute" element={<Contribute />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer class="footer">
        <div class="footer-content">
          <h2 class="footer-title">Pustak Ghar</h2>
          <p class="footer-text">
            © 2025 Pustak Ghar. All rights reserved.
          </p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
</footer>

      </div>
    </Router>
  );
}

export default App;
