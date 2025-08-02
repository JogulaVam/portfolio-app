import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import NavBar from "./components/Navbar";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Sidebar from "./components/Sidebar";
import FixedContainer from "./components/Container";

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(()=>{
    document.documentElement.classList.toggle("dark",darkMode);
    localStorage.setItem("theme",darkMode ? "dark" : "light");
  }, [darkMode]
  );
  return (
    <Router>
      {/* 1. Main container uses flexbox */}
      <div className="flex bg-gray-50 dark:bg-gray-900">
        
        {/* 2. Sidebar takes up a fixed width */}
        <Sidebar />
        
        {/* 3. Main content area grows to fill the remaining space */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certification" element={<Certifications />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
