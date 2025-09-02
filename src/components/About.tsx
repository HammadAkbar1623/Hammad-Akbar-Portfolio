import { motion } from "framer-motion";
import { useEffect } from "react";
import resume from "../assets/Updated Resume.pdf";
import portfolio from "../assets/Portfolio.jpg";


function About() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
        id="About"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl w-full mx-4 md:mx-8">
        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            About Me
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed"
          >
            <p>
              <span className="text-cyan-400 font-semibold">Full Stack Developer</span> with expertise in crafting full-cycle Web & App solutions. 
              I blend technical prowess with creative UI/UX design to build performant, scalable applications.
            </p>

            <div className="bg-gray-800/50 p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="font-medium">Core Technologies:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "Next Js", "Node js", "MongoDB", "Express", "TypeScript", "Docker", "Figma"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-700/50 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p>
              As a founder of <span className="text-cyan-400">TUF-Connect</span>, I led development of a campus social platform 
              connecting 500+ students, demonstrating my ability to transform concepts into impactful digital experiences.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <a 
              href= {resume}
              download={true}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md font-medium transition-colors text-center"
            >
              My Resume
            </a>
            <a 
              href="/contact" 
              className="px-6 py-2 border text-white border-cyan-400 hover:bg-cyan-400/10 rounded-md transition-colors text-center"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-xs md:max-w-md rounded-lg overflow-hidden shadow-lg">
            <img
              src = {portfolio}
              alt="Profile"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;