import { motion } from "framer-motion";
import { Lightbulb, Users, ShieldCheck, Code } from "lucide-react";
// IMPORTANT: Replace with the actual path to your professional photo
import profileImage from "../assets/my_image.png"; 

// --- Data for the "Key Interests" section ---
const interests = [
  {
    icon: <Lightbulb className="w-8 h-8 text-green-500" />,
    title: "Problem Solving",
    description: "I thrive on dissecting complex challenges and architecting elegant, effective solutions."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    title: "Secure by Design",
    description: "Integrating security into every phase of development is not an afterthought, but a core principle."
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "User-Centricity",
    description: "Building applications that are not just functional, but also intuitive and enjoyable to use."
  },
  {
    icon: <Code className="w-8 h-8 text-green-500" />,
    title: "Clean Code",
    description: "A passion for writing maintainable, readable, and scalable code that stands the test of time."
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
    >
      {/* --- Left Side: Image --- */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-2 relative flex items-center justify-center"
      >
        <div className="absolute w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>
        <motion.div
          animate={{ y: [-5, 5] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="relative w-64 h-64 sm:w-80 sm:h-80"
        >
          <img
            src={profileImage}
            alt="Vamshidhar Jogula"
            className="rounded-full w-full h-full object-cover border-4 border-white/80 dark:border-gray-800/50 shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* --- Right Side: Text Content --- */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-3"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 dark:text-green-500">
          About Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I'm a passionate full-stack developer and cloud security learner with a strong foundation in Java, Spring Boot, and modern web technologies. I love transforming complex problems into elegant, user-friendly solutions. My journey in technology is driven by a relentless curiosity and a desire to build things that are not just functional, but also secure and scalable.
        </p>

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">My Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-400">
                I believe great software is built at the intersection of robust engineering and thoughtful design. I prioritize writing clean, maintainable code and fostering a collaborative environment to turn innovative ideas into reality.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map(interest => (
                <motion.div
                    key={interest.title}
                    variants={itemVariants}
                    className="bg-white/40 dark:bg-black/20 p-4 rounded-xl shadow-lg backdrop-blur-md flex items-start gap-4"
                >
                    <div className="flex-shrink-0 mt-1">{interest.icon}</div>
                    <div>
                        <h4 className="font-bold text-gray-800 dark:text-gray-200">{interest.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{interest.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}