import { motion } from "framer-motion";
import { Code, Server, Cloud, BrainCircuit } from "lucide-react";

// --- Data for your skills ---
// Organizing skills into categories makes them easier to manage and display.
const skillCategories = [
  {
    name: "Frontend",
    icon: <Code size={32} className="text-green-500" />,
    skills: [ "HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS" ],
  },
  {
    name: "Backend",
    icon: <Server size={32} className="text-green-500" />,
    skills: [ "Java", "Spring Boot", "Python", "Django", "REST APIs" ],
  },
  {
    name: "Databases & Cloud",
    icon: <Cloud size={32} className="text-green-500" />,
    skills: [ "MySQL", "Microsoft Azure", "Google Cloud Platform", "Firebase" ],
  },
  {
    name: "Core & Methodologies",
    icon: <BrainCircuit size={32} className="text-green-500" />,
    skills: [ "Data Structures", "Algorithms", "Git & GitHub", "Agile/Scrum", "OOP" ],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of each card
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 dark:text-green-500">
          My Technical Arsenal
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of the tools and technologies I use to bring ideas to life.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            variants={cardVariants}
            whileHover={{ 
              y: -10, // Lift the card on hover
              scale: 1.03,
              boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
            }}
            className="bg-white/40 dark:bg-black/20 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/10 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              {category.icon}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-green-500/20">
              {category.skills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-green-100/80 dark:bg-green-900/60 text-green-800 dark:text-green-200 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}