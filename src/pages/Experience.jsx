import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

// --- Step 1: Organize all experience data into a structured array ---
// Ordered from most recent to oldest
const experienceData = [
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant",
    duration: "Jun 2025 - Present",
    type: "Full-time",
    description: [
      "Currently undergoing training in advanced software development principles and enterprise technologies.",
      "Contributing to internal projects and gaining hands-on experience in a corporate environment.",
    ],
    techStack: ["Java", "Spring Boot", "React", "Agile Methodologies"],
  },
  {
    role: "Intern – Java IoT Product Engineering",
    company: "Cognizant",
    duration: "Jan 2025 - May 2025",
    type: "Internship",
    description: [
        "Worked on an end-to-end project for ATM monitoring using Azure and Spring Boot.",
        "Gained knowledge in Automation Control Systems, IoT Embedded Systems, and cloud integration.",
        "Applied concepts in Azure Cloud, Java, MySQL, and modern web development.",
    ],
    techStack: ["Java", "MySQL", "Azure IoT", "Spring Boot", "HTML/CSS", "JavaScript"],
  },
  {
    role: "Zero Trust Cloud Security Intern",
    company: "AICTE-Eduskills",
    duration: "Apr 2024 – Jun 2024",
    type: "Internship",
    description: [
        "Completed comprehensive modules on Zero Trust security principles for cloud environments.",
        "Learned to implement and manage secure access controls and threat detection in the cloud.",
    ],
    techStack: ["Zero Trust", "Cloud Security", "IAM", "Network Security"],
  },
  {
    role: "Data Analytics Micro-Intern",
    company: "IBM SkillsBuild",
    duration: "Mar 2024 (2 weeks)",
    type: "Micro-Internship",
    description: [
      "Learned foundational concepts of data collection, processing, and visualization.",
      "Completed a hands-on project to analyze a dataset and present findings.",
    ],
    techStack: ["Data Analysis", "Python", "Pandas", "Data Visualization"],
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

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 dark:text-green-500">
          Career Journey
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My professional path and key learning experiences so far.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* The vertical timeline bar */}
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-0.5 bg-green-300/50 dark:bg-green-700/50"></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative mb-12 flex items-center w-full"
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 sm:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div
              className={`w-full sm:w-1/2 p-1 ${
                index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:ml-auto"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
                className="bg-white/50 dark:bg-black/30 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-200 whitespace-nowrap">{exp.type}</span>
                </div>
                <p className="text-md font-semibold text-green-700 dark:text-green-400 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.duration}</p>
                
                <ul className="text-left list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                    {exp.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>

                <div className="mt-auto pt-4 border-t border-green-500/20">
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}