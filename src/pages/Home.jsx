import { motion } from "framer-motion"

export default function Home(){
    return(
        <motion.div initial={{opacity : 0}} animate={{opacity : 1}} className="p-8">
            <h2 className="text-4xl font-bold mb-4">Hi, I'm Jogula Vamshidhar 👋</h2>
            <p className="text-xl">React Developer | Java Full Stack Enthusiast | Cloud Security Learner</p>
        </motion.div>
    );
}