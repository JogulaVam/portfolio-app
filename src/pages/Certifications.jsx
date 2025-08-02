import { motion } from "framer-motion";
import { Award, ShieldCheck, Cpu, Cloud, Code, BarChart3 } from "lucide-react";

// --- Step 1: Organize certifications into a structured data array ---
const certificationsData = [
  {
    title: "Software Engineering Simulation",
    issuer: "JP Morgan & Forage",
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    link: "#", // Add credential link here
  },
  {
    title: "Data Analytics Virtual Experience",
    issuer: "IBM SkillsBuild",
    icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
    link: "#",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    icon: <Code className="w-10 h-10 text-red-500" />,
    link: "#",
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    icon: <Cloud className="w-10 h-10 text-yellow-500" />,
    link: "#",
  },
  {
    title: "Object-Oriented Programming",
    issuer: "MATLAB",
    icon: <Cpu className="w-10 h-10 text-orange-500" />,
    link: "#",
  },
  {
    title: "IT Essentials",
    issuer: "Cisco Networking Academy",
    icon: <Award className="w-10 h-10 text-red-500" />,
    link: "#",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Certifications() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 dark:text-green-500">
          Recognitions & Credentials
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my certified skills and successful program completions.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {certificationsData.map((cert) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            className="relative"
          >
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -8, 
                scale: 1.05, 
                boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
              }}
              className="block bg-white/50 dark:bg-black/30 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/10 h-full flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{cert.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>
              <div className="mt-auto pt-4 text-right">
                <span className="text-sm font-semibold text-green-600 dark:text-green-400 group-hover:underline">
                  View Credential →
                </span>
              </div>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}