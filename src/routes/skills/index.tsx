import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiTailwindcss, SiFigma, SiAdobeillustrator, SiMongodb, SiNextdotjs, SiDocker } from 'react-icons/si';
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const Route = createFileRoute('/skills/')({
  component: RouteComponent,
})

function RouteComponent() {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, proficiency: 95, color: 'bg-yellow-400' },
    { name: 'React', icon: <FaReact />, proficiency: 95, color: 'bg-sky-400' },
    { name: 'Next', icon: <SiNextdotjs />, proficiency: 90, color: 'bg-sky-500' },
    { name: 'TypeScript', icon: <SiTypescript />, proficiency: 85, color: 'bg-blue-600' },
    { name: 'Node', icon: <FaNodeJs />, proficiency: 88, color: 'bg-green-600' },
    { name: 'Adobe Illustrator', icon: <SiAdobeillustrator />, proficiency: 75, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, proficiency: 98, color: 'bg-teal-400' },
    { name: 'Docker', icon: <SiDocker />, proficiency: 80, color: 'bg-violet-500' },
    { name: 'Figma', icon: <SiFigma />, proficiency: 70, color: 'bg-pink-500' },
    { name: 'Git', icon: <FaGitAlt />, proficiency: 93, color: 'bg-orange-600' },
    { name: 'MongoDB', icon: <SiMongodb />, proficiency: 78, color: 'bg-green-500' },
    { name: 'SQL', icon: <FaDatabase />, proficiency: 85, color: 'bg-indigo-600' },
  ];

  const particlesCount = 50;
  
  const particles = useMemo(() => {
    return Array.from({ length: particlesCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      offset: Math.random() * 100,
      size: Math.random() * 3,
    }));
  }, []);

  return (
    <>
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 bg-black overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 bg-blue-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100],
              x: [0, particle.offset],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(100,100,255,0.1)_0,_rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-26 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Technical Skills</h1>
            <p className="text-xl text-teal-400 font-bold">Technologies I've been working with recently</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-3xl text-cyan-400`}>
                    {skill.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-cyan-400">{skill.name}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">Proficiency</span>
                  <span className="text-sm font-medium text-gray-300">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`${skill.color} h-2 rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}