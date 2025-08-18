import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./components/SearchBook";
import Branch from "./components/SearchBranch";
import SubjectsPage from "./components/SubjectSelect";
import Content from "./components/Content";
import SubjectDetails from "./components/SubjectDetails";
import JoinUs from "./components/JoinUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";

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
              <Route path="/joinus" element={<JoinUs/>}/>
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
