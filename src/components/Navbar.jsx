import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function NavBar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Vamshidhar Jogula</h1>
      <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
        <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/certification">Certification</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
