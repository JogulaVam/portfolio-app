import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

// --- Data for the contact cards ---
const contactLinks = [
  {
    name: "Email",
    value: "jogulavamshidhar098@gmail.com",
    icon: <Mail className="w-8 h-8 text-green-500" />,
    href: "mailto:jogulavamshidhar098@gmail.com",
  },
  {
    name: "GitHub",
    value: "JogulaVam",
    icon: <Github className="w-8 h-8 text-green-500" />,
    href: "https://github.com/JogulaVam",
  },
  {
    name: "LinkedIn",
    value: "Vamshidhar Jogula",
    icon: <Linkedin className="w-8 h-8 text-green-500" />,
    href: "https://www.linkedin.com/in/vamshidhar-jogula-99b048242/",
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // IMPORTANT: For this form to actually send emails, you need a backend service.
  // Services like EmailJS, Formspree, or a custom server endpoint are great options.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would add your logic to send the form data
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-600 dark:text-green-500">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question, a project proposal, or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* --- Left Side: Contact Cards --- */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Let's Connect</h3>
            {contactLinks.map((link) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/50 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl flex items-center gap-6 shadow-lg border border-white/10"
                >
                    <div className="flex-shrink-0">{link.icon}</div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">{link.name}</h4>
                        <p className="text-md text-green-700 dark:text-green-400 break-all">{link.value}</p>
                    </div>
                </motion.a>
            ))}
        </motion.div>

        {/* --- Right Side: Contact Form --- */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="bg-white/40 dark:bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10 space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Send me a Message</h3>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent transition"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent transition"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent transition"></textarea>
          </div>
          <button type="submit" className="w-full py-3 px-6 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all">
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}