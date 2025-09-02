import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from '@tanstack/react-router';
import {
  FiHome,
  FiFolder,
  FiBook,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { name: "Home", icon: <FiHome />, link: "/" },
  { name: "Skills", icon: <FaCode/>, link: "/skills/" },
  { name: "Projects", icon: <FiFolder />, link: "/projects" }, 
  { name: "Blog", icon: <FiBook />, link: "/blog" },
  { name: "Contact", icon: <FiMail />, link: "/contact/" }, 
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (to: string) => {
    navigate({ to });
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Social Icons */}
      <motion.div 
        className="fixed top-5 right-4 xs:right-6 sm:right-8 md:right-10 z-50 flex gap-3 sm:gap-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <a
          href="https://github.com/HammadAkbar1623"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 sm:p-2 text-teal-300 hover:text-white transition-colors
                     rounded-full hover:bg-teal-300/20 backdrop-blur-sm
                     border border-teal-300/30 shadow-[0_0_8px_#40E0D0]"
        >
          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/hammad-akbar-khan-107167283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 sm:p-2 text-teal-300 hover:text-white transition-colors
                     rounded-full hover:bg-teal-300/20 backdrop-blur-sm
                     border border-teal-300/30 shadow-[0_0_8px_#40E0D0]"
        >
          <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </a>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav 
        className="fixed top-5 w-full max-w-[95vw] md:w-[600px] rounded-4xl z-50 
                   bg-gray-900/90 backdrop-blur-xl md:border md:border-teal-300
                   shadow-[0_0_16px_#40E0D0] transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden absolute right-4 top-8 p-2 text-[#40E0D0]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menu Items */}
        <ul className={`flex flex-col md:flex-row items-center justify-around gap-4 p-6 md:p-4
                        ${isOpen ? "block" : "hidden"} md:flex`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="flex items-center gap-2 text-white hover:text-teal-300 transition-colors
                           text-sm sm:text-base"
                onClick={() => handleNavigation(item.link)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}

export default Navbar;