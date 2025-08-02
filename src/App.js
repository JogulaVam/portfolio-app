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

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(()=>{
    document.documentElement.classList.toggle("dark",darkMode);
    localStorage.setItem("theme",darkMode ? "dark" : "light");
  }, [darkMode]
  );

return(
  <div>
    <Router>
      <NavBar setDarkMode={setDarkMode} darkMode = {darkMode}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/certification" element={<Certifications/>}/>
        <Route path="/contacts" element={<Contact/>}/>
      </Routes>
    </Router>
  </div>
);
}
