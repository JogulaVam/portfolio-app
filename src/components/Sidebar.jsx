import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/Navbar";

// (Keep your animation variants here)
const sidebarVariants = { /* ... */ };
const contentVariants = { /* ... */ };

// Accept the `activeSection` prop
const Sidebar = ({ activeSection }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        // (Keep your animation and hover props here)
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05, rotateY: 8, boxShadow: "0px 15px 40px rgba(0,0,0,0.3)" }}
        className="flex flex-col h-screen p-3 w-60 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-md shadow-2xl border-r border-white/10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 p-4 rounded-lg"
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Pass the activeSection prop down to the NavBar */}
          <NavBar 
            setDarkMode={setDarkMode} 
            darkMode={darkMode} 
            activeSection={activeSection} 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sidebar;