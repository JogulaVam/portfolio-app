import { useState, useEffect } from "react";
// Step 1: Import the necessary Framer Motion hooks
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, ArrowDown, MoveRight, DownloadCloud } from "lucide-react";
import profileImage from "../assets/my_image.png";
import { NavLink } from "react-router-dom";

// Data and initial variants remain the same
const skills = [
  "Web Development", "IoT & Embedded Systems", "Machine Learning", "Databases & Cloud"
];
const socialLinks = [
  { icon: <Github />, url: "https://github.com/JogulaVam", name: "GitHub" },
  { icon: <Linkedin />, url: "https://www.linkedin.com/in/vamshidhar-jogula-99b048242/", name: "LinkedIn" },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function Home({ inView = true }) {
  const [index, setIndex] = useState(0);

  // Step 2: Create motion values to track the mouse position.
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Step 3: Create transformed values for the 3D rotation.
  // We map the mouse's X/Y position to a rotation degree range.
  const rotateX = useTransform(mouseY, [-300, 300], [20, -20]); // Mouse Y controls X-axis rotation
  const rotateY = useTransform(mouseX, [-300, 300], [-20, 20]); // Mouse X controls Y-axis rotation

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % skills.length), 5000);
    return () => clearInterval(timer);
  }, []);
  
  // Step 4: Update the event handler to set the motion values.
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPos = clientX - left - width / 2;
    const yPos = clientY - top - height / 2;
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Correctly uses inView prop for scroll animations
      className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 dark:bg-gray-900"
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
        
        {/* --- ITEM 1: 3D Profile Card --- */}
        <motion.div
          variants={itemVariants}
          className="w-full"
          style={{ perspective: "1500px" }} // Perspective is set on the hover-area parent
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Step 5: The card is now a motion.div applying the reactive rotation styles */}
          <motion.div
            className="relative w-full bg-white/50 dark:bg-black/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 flex items-center"
            style={{
              rotateX, // Apply the transformed motion value
              rotateY, // Apply the transformed motion value
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* The rest of your card content now moves in 3D */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-10 -left-16 w-64 h-64 bg-green-400/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-16 -right-10 w-72 h-72 bg-green-600/30 rounded-lg blur-3xl transform rotate-45"></div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 w-full" style={{transform: "translateZ(30px)"}}>
              <motion.div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0" style={{ transform: "translateZ(50px)" }}>
                <img src={profileImage} alt="Jogula Vamshidhar" className="rounded-full w-full h-full object-cover border-4 border-white/80 shadow-xl" />
              </motion.div>
              <div className="text-center sm:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-green-700 dark:text-green-400">
                  Hi, I'm Jogula Vamshidhar 👋
                </h2>
                <p className="text-lg md:text-xl mb-4 text-gray-800 dark:text-gray-200">
                  Full Stack Developer | IoT & Cloud Enthusiast
                </p>
                <div className="flex items-center justify-center sm:justify-start text-md md:text-lg h-12">
                  <p className="mr-2 text-gray-600 dark:text-gray-300">I specialize in:</p>
                  <AnimatePresence mode="wait">
                    <motion.div key={skills[index]} initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -15, opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="font-bold text-lg text-green-800 dark:text-green-300">
                      {skills[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- The rest of your components with their entrance animations --- */}
        <motion.div variants={itemVariants}>
            <div className="text-center bg-white/40 dark:bg-black/20 p-6 rounded-2xl w-full">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">My Approach</h3>
                <p className="text-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    I build dynamic, responsive web applications with a focus on clean code and user-centric design.
                    My passion lies in creating efficient, secure, and scalable solutions that solve real-world problems.
                </p>
            </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <NavLink to="/projects" className="group bg-green-600 text-white p-6 rounded-2xl text-left shadow-lg hover:bg-green-700 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold">View My Work</h3>
              <p className="text-green-200 mt-1">Check out my projects and Contributions.</p>
            </div>
            <MoveRight className="mt-4 transform transition-transform group-hover:translate-x-2 self-start" />
          </NavLink>
          <motion.a
            href="/vamshidhar_jogula_resume.pdf"
            download
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white/50 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl text-left shadow-lg border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4">
                <DownloadCloud className="w-10 h-10 text-green-500" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Download Resume</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Get a copy of my CV for your records.</p>
            </div>
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group bg-white/50 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl flex items-center gap-4 hover:bg-white/80 dark:hover:bg-black/50 transition-colors shadow-lg">
                <div className="text-green-600 dark:text-green-400">{link.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{link.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Follow my work</p>
                </div>
              </a>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}