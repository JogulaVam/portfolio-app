import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Make sure to replace this with the actual path to your image
import profileImage from "../assets/my_image.png";

// List of skills to be animated
const skills = [
  "React Development",
  "Java Full Stack",
  "Cloud Security",
  "Web Design",
  "UI/UX Principles",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  // Cycle through skills every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  // 3D hover effect logic
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 25;
    const y = (clientY - top - height / 2) / 25;
    cardRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    // Main container to center the card
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-4 dark:bg-gray-900 overflow-hidden"
    >
      {/* 3D Perspective Container */}
      <div
        className="w-full max-w-4xl"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* The Card - with 3D transform style */}
        <div
          ref={cardRef}
          className="relative w-full bg-white/50 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20"
          style={{ transition: "transform 0.1s ease", transformStyle: "preserve-3d" }}
        >
          {/* Abstract SVG Shapes in the background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-10 -left-16 w-64 h-64 bg-green-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-16 -right-10 w-72 h-72 bg-green-600/30 rounded-lg blur-3xl transform rotate-45"></div>
          </div>
          
          {/* Card Content Container */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Left Column: Image with 3D effect */}
            <motion.div
              className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0"
              style={{ transform: "translateZ(40px)" }} // Lifts the image off the card
            >
              <img
                src={profileImage}
                alt="Jogula Vamshidhar"
                className="rounded-full w-full h-full object-cover border-4 border-white/80 shadow-xl"
              />
            </motion.div>

            {/* Right Column: Text Content with 3D effect */}
            <div className="text-center md:text-left" style={{ transform: "translateZ(20px)" }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-700 dark:text-green-400">
                Hi, I'm Jogula Vamshidhar 👋
              </h2>
              <p className="text-lg md:text-xl mb-4 text-gray-800 dark:text-gray-200">
                React Developer | Java Full Stack Enthusiast
              </p>

              <div className="flex items-center justify-center md:justify-start text-md md:text-lg h-12">
                <p className="mr-2 text-gray-600 dark:text-gray-300">I am good at:</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={skills[index]}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="font-bold text-lg text-green-800 dark:text-green-300"
                  >
                    {skills[index]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}