import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, ArrowDown, MoveRight } from "lucide-react";
import profileImage from "../assets/my_image.png";
import {NavLink} from "react-router-dom";


// --- Data for the panels ---
const skills = [
  "React Development", "Java Full Stack", "Cloud Security", "Web Design", "UI/UX Principles"
];

const socialLinks = [
  { icon: <Github />, url: "https://github.com/your-username", name: "GitHub" },
  { icon: <Linkedin />, url: "https://linkedin.com/in/your-profile", name: "LinkedIn" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }, // Adjusted stagger for smoother flow
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % skills.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    if (cardRef.current) cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 dark:bg-gray-900"
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">

        {/* --- ITEM 1: 3D Profile Card --- */}
        <motion.div
          variants={itemVariants}
          className="w-full"
          style={{ perspective: "1000px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            className="relative w-full bg-white/50 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 flex items-center"
            style={{ transition: "transform 0.1s ease", transformStyle: "preserve-3d" }}
          >
            {/* ... (background shapes and other inner elements remain the same) ... */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-10 -left-16 w-64 h-64 bg-green-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-16 -right-10 w-72 h-72 bg-green-600/30 rounded-lg blur-3xl transform rotate-45"></div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 w-full">
              <motion.div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0" style={{ transform: "translateZ(40px)" }}>
                <img src={profileImage} alt="Jogula Vamshidhar" className="rounded-full w-full h-full object-cover border-4 border-white/80 shadow-xl" />
              </motion.div>
              <div className="text-center sm:text-left" style={{ transform: "translateZ(20px)" }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-700 dark:text-green-400">
                  Hi, I'm Jogula Vamshidhar 👋
                </h2>
                <p className="text-lg md:text-xl mb-4 text-gray-800 dark:text-gray-200">
                  React Developer | Java Full Stack Enthusiast
                </p>
                <div className="flex items-center justify-center sm:justify-start text-md md:text-lg h-12">
                  <p className="mr-2 text-gray-600 dark:text-gray-300">I am good at:</p>
                  <AnimatePresence mode="wait">
                    <motion.div key={skills[index]} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -15, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="font-bold text-lg text-green-800 dark:text-green-300">
                      {skills[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- ITEM 2: Personal Description --- */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-white/40 dark:bg-black/20 p-6 rounded-2xl w-full"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">My Approach</h3>
          <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I build dynamic, responsive web applications with a focus on clean code and user-centric design.
            My passion lies in creating efficient, secure, and scalable solutions that solve real-world problems.
          </p>
        </motion.div>

        {/* --- ITEM 3: Action & Info Panels --- */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-6 w-full"
        >
          <NavLink to="/projects" className="group bg-green-600 text-white p-6 rounded-2xl text-left shadow-lg hover:bg-green-700 transition-all">
            <h3 className="text-2xl font-bold">View My Work</h3>
            <p className="text-green-200 mt-1">Check out my latest projects and case studies.</p>
            <MoveRight className="mt-4 transform transition-transform group-hover:translate-x-2" />
          </NavLink>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group bg-white/50 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl flex items-center gap-4 hover:bg-white/80 dark:hover:bg-black/50 transition-colors shadow-lg">
                <div className="text-green-600 dark:text-green-400">{link.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{link.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Follow my work</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}