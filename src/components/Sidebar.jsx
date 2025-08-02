// src/components/Sidebar.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/Navbar";

// Animation variants remain the same
const sidebarVariants = { /* ... */ };
const contentVariants = { /* ... */ };

export default function Sidebar({ activeSection }) {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // --- THE FIX ---
  // The motion.div is now the root. The extra wrapper div is gone.
  // The 'fixed' class here will now work correctly because this component will
  // no longer be inside a scrolling flex container in App.js.
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 flex flex-col h-screen p-3 w-64 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-md shadow-2xl border-r border-white/10"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      // The 3D hover effect can stay, but it's the positioning that's key
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        variants={contentVariants}
        className="flex-1 rounded-lg"
      >
        <NavBar
          setDarkMode={setDarkMode}
          darkMode={darkMode}
          activeSection={activeSection}
        />
      </motion.div>
    </motion.div>
  );
};