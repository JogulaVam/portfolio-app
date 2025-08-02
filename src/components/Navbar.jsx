import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import { Moon, Sun, Home, User, Code, Briefcase, Award, Mail } from "lucide-react";

// --- Data for navigation links remains the same ---
const navLinks = [
    { name: "Home", to: "/", icon: <Home size={20} /> },
    { name: "About", to: "/about", icon: <User size={20} /> },
    { name: "Skills", to: "/skills", icon: <Code size={20} /> },
    { name: "Projects", to: "/projects", icon: <Briefcase size={20} /> },
    { name: "Experience", to: "/experience", icon: <Briefcase size={20} /> },
    { name: "Certification", to: "/certification", icon: <Award size={20} /> },
    { name: "Contacts", to: "/contacts", icon: <Mail size={20} /> },
];

// --- Step 1: Define more complex animation variants ---

// Variants for the list container to orchestrate staggered animations
const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Each child will animate 0.1s after the previous one
        },
    },
};

// Variants for each list item
const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
        },
    },
};

export default function NavBar({ darkMode, setDarkMode }) {
    return (
        <nav className="flex flex-col h-full w-full p-4">
            <div className="flex items-center justify-between mb-10">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-xl font-bold text-green-600 dark:text-green-500"
                >
                    Vamshidhar Jogula
                </motion.h1>
                <motion.button
                    onClick={() => setDarkMode(!darkMode)}
                    whileHover={{ scale: 1.1, rotate: 20 }}
                    whileTap={{ scale: 0.9, rotate: -20 }}
                    className="p-2 rounded-full text-gray-700 dark:text-gray-300"
                >
                    {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                </motion.button>
            </div>

            {/* --- Step 2: Apply the staggering container variants --- */}
            <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="flex-grow space-y-2"
            >
                {navLinks.map((link) => (
                    // --- Step 3: Apply item variants to each list item ---
                    <motion.li key={link.name} variants={itemVariants}>
                        <NavLink
                            to={link.to}
                            className="group relative flex items-center gap-4 w-full p-3 rounded-lg transition-colors duration-200"
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-green-600 rounded-lg"
                                            style={{ zIndex: 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    
                                    {/* --- Step 4: Add hover and active animations to the icon --- */}
                                    <motion.div
                                        className="relative z-10 dark:text-white"
                                        whileHover={{ scale: 1.2, rotate: -10 }}
                                        animate={isActive ? { scale: 1.25, y: -2 } : {}}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        {link.icon}
                                    </motion.div>
                                    
                                    <span
                                        className={`relative z-10 font-semibold transition-colors
                                        ${isActive
                                            ? "text-white"
                                            : "text-gray-600 dark:text-gray-300 group-hover:text-green-700 dark:group-hover:text-green-300"
                                        }`
                                    }
                                    >
                                        {link.name}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }} // Fades in after the list is done animating
                className="mt-auto text-center text-xs text-gray-400"
            >
                <p>© {new Date().getFullYear()} Vamshidhar Jogula</p>
                <p>Built with React & Framer Motion</p>
            </motion.div>
        </nav>
    );
}