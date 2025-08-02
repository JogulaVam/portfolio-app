import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      {/* NO MORE FLEXBOX HERE. This is just a simple container. */}
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        
        {/* The Sidebar component will now position itself correctly */}
        <Sidebar />
        
        {/* KEY CHANGE: We add 'ml-60' to create space for the w-60 sidebar. */}
        <main className="ml-60 p-6">
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