import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// --- Step 1: Organize all project data into a structured array ---
const projectsData = [
  {
    id: 1,
    title: "ATM Monitoring System",
    category: "Cognizant Internship",
    // Replace with your actual project image path
    image: "/images/atm-monitoring.png", 
    description: [
      "Designed and implemented an ATM monitoring application with Admin and Technician roles.",
      "Admin monitors cash flow and temperature; Technician adjusts temperature and deposits cash.",
      "Integrated Azure IoT Hub to collect and display real-time sensor data.",
    ],
    techStack: ["Java", "MySQL", "Azure IoT Hub", "JSP"],
    githubLink: "#", // Add your GitHub link
    liveLink: null, // No live link for this one
  },
  {
    id: 2,
    title: "Self-Balancing Robot",
    category: "Hackathon Project",
    image: "/images/self-balancing-robot.png",
    description: [
      "Built an IoT-enabled self-balancing robot during a Cognizant hackathon.",
      "Integrated Arduino Nano, MPU6050 gyro sensor, and N20 Micro gear motors.",
      "Implemented a PID control algorithm to dynamically maintain balance and stability.",
    ],
    techStack: ["Arduino (C++)", "PID Control", "Gyro Sensor", "IoT"],
    githubLink: "#",
    liveLink: null,
  },
  {
    id: 3,
    title: "Student Performance Website",
    category: "Academic Project",
    image: "/images/student-performance.png",
    description: [
        "Developed a web portal to track and display student academic performance.",
        "Features included grade entry, report generation, and data visualization.",
    ],
    techStack: ["Java", "JDBC", "MySQL", "HTML", "CSS"],
    githubLink: "#",
    liveLink: null,
  },
  {
    id: 4,
    title: "Spam Mail Prediction",
    category: "Machine Learning",
    image: "/images/spam-prediction.png",
    description: [
        "Created a model to classify emails as spam or not using Natural Language Processing.",
        "Utilized Scikit-learn for model training and evaluation.",
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    githubLink: "#",
    liveLink: null,
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 dark:text-green-500">
          Creations & Contributions
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each one was a unique journey of learning and problem-solving.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="relative group bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 overflow-hidden"
          >
            <div className="overflow-hidden">
              {/* IMPORTANT: Replace `src` with your actual project image */}
              <img
                src={project.image || 'https://placehold.co/600x400/16a34a/white?text=Project'}
                alt={project.title}
                className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Links overlay - appears on hover */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80">
                    <Github size={20} />
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80">
                    <ExternalLink size={20} />
                  </a>
                )}
            </div>

            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-200 whitespace-nowrap">{project.category}</span>
              </div>

              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                  {project.description.map((point, index) => <li key={index}>{point}</li>)}
              </ul>
              
              <div className="mt-auto pt-4 border-t border-green-500/20">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}