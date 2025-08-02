import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function NavBar({ darkMode, setDarkMode }) {
 return (
 <nav className="flex-col flex items-start px-6 py-4">
 <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
 {darkMode ? (<Sun size={20} className="text-gray-300" />) : (<Moon size={20} className="text-gray-700" />
 )}
 </button>
 <h1 className="text-2xl font-bold text-green-600 dark:text-green-500 mt-4">
 Vamshidhar Jogula
 </h1>
 <div className="flex flex-col gap-4 mt-6 text-gray-600 dark:text-gray-300">
 <NavLink
 to="/"
 className={({ isActive }) =>
 isActive
 ? "font-bold text-green-600 dark:text-green-400"
 : "hover:text-green-600 dark:hover:text-green-400"
 }
 >
 Home
 </NavLink>
 <NavLink
 to="/about"
 className={({ isActive }) =>
 isActive
 ? "font-bold text-green-600 dark:text-green-400"
 : "hover:text-green-600 dark:hover:text-green-400"
 }
 >
 About
 </NavLink>
 <NavLink
 to="/skills"
 className={({ isActive }) =>
 isActive
 ? "font-bold text-green-600 dark:text-green-400"
 : "hover:text-green-600 dark:hover:text-green-400"
 }
 >
 Skills
 </NavLink>
 <NavLink
 to="/projects"
 className={({ isActive }) =>
 isActive
 ? "font-bold text-green-600 dark:text-green-400"
 : "hover:text-green-600 dark:hover:text-green-400"
 }
 >
 Projects
 </NavLink>
 <NavLink
 to="/experience"
 className={({ isActive }) =>
 isActive
 ? "font-bold text-green-600 dark:text-green-400"
 : "hover:text-green-600 dark:hover:text-green-400"
 }
 >
 Experience
 </NavLink>
 <NavLink
 to="/certification"
 className={({ isActive }) =>
 isActive
 ? "font-bold text-green-600 dark:text-green-400"
 : "hover:text-green-600 dark:hover:text-green-400"
 }
 >
 Certification
 </NavLink>
 <NavLink
 to="/contacts"
 className={({ isActive }) =>
 isActive
 ? "font-bold text-green-600 dark:text-green-400"
 : "hover:text-green-600 dark:hover:text-green-400"
 }
 >
 Contacts
 </NavLink>
 </div>
 </nav>
 );
}