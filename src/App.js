import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Search from "./components/SearchBook";
import Branch from "./components/SearchBranch";
import SubjectsPage from "./components/SubjectSelect";
import Content from "./components/Content";
import Resources from "./components/Resources";
import SubjectDetails from "./components/SubjectDetails";

import FAQ from "./components/FAQ";

import FAQ from "./components/FAQ"; 
import PustakReviews from './components/PustakReviews';


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Upload from "./components/Upload";
import About from "./components/About";
import Contribute from "./components/Contribute";
import More from "./components/More"; 
import Join from "./components/Join";
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
              <Route
                path="/"
                element={
                  <>
                    <Search />
                    <PustakReviews />
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
              <Route path="/resources" element={<Resources />} />
              <Route path="/Join" element={<Join/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/more" element={<More />} />
              <Route path="/contribute" element={<Contribute />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
