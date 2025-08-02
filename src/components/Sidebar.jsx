import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/Navbar";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    // The fixed position is applied to this main div.
    // It's pinned to the top-left and has a high z-index to stay on top.
    <motion.div
      className="fixed top-0 left-0 z-50 flex flex-col h-screen p-3 w-60 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-md shadow-2xl border-r border-white/10"
      // Your animations can remain as they were
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* The rest of your sidebar content */}
      <div className="flex-1 p-4 rounded-lg">
        <NavBar 
          setDarkMode={setDarkMode} 
          darkMode={darkMode} 
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;