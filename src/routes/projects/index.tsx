import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import { useMemo } from 'react'
import Footer from '../../components/Footer'
import tufconnect from '../../assets/tuf-connect.jpg'
import manifest from '../../assets/manifest.jpg'
import aladal from '../../assets/Aladal.png'
import carrent from '../../assets/carrent.png'

export const Route = createFileRoute('/projects/')({
    component: ProjectsPage,
})

const projects = [
    {
        title: "University Specific Social Media",
        description: "Developed a Full-Stack social media platform for university students where they can connect, share, and collaborate. Connected over 300+ students. Read more about it on my Github.",
        tech: ["MongoDB", "Express.js", "React Native", "Node"],
        image: tufconnect,
        github: "https://github.com/HammadAkbar1623/TUF-Connect.git",
        demo: "https://tuffconnect.expo.app"
    },
    {
        title: "AutoPause for YouTube - Smart video pausing for multitaskers",
        description: "A lightweight Chrome extension that automatically pauses YouTube videos when you switch to another tab—perfect for users who get distracted or need to multitask without missing a beat.",
        tech: ["Javascript", "Manifest V3", "Youtube DOM Scripting"],
        image: manifest,
        github: "https://github.com/HammadAkbar1623/Automatically-Pause-Play-Youtube-Video.git",
        demo: "#"
    },
    {
        title: "Al-Adal Consulting Solutions",
        description: "A project for a consulting firm that provides various services to clients, including project management and consulting.",
        tech: ["React Ts", "TailwindCSS", "Tanstack Router", "Email Js"],
        image: aladal,
        github: "https://github.com/HammadAkbar1623/Consulting-Website.git",
        demo: "https://aladalconsultants.netlify.app/"
    },
    {
        title: "Rent A Car Website",
        description: "A car rental website that allows users to browse and rent cars online. The website features a user-friendly interface with both dark & light mode.",
        tech: ["React Ts", "TailwindCSS"],
        image: carrent,
        github: "https://github.com/HammadAkbar1623/Car-Rental-Website.git",
        demo: "https://niazicarrent.netlify.app/"
    },
]

function ProjectsPage() {
    const [activeIndex, setActiveIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const [windowHeight, setWindowHeight] = useState(0)

    const particlesCount = 50
    const particles = useMemo(() => {
        return Array.from({ length: particlesCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            offset: Math.random() * 100,
            size: Math.random() * 3,
        }))
    }, [])

    useEffect(() => {
        const updateHeight = () => {
            setWindowHeight(window.innerHeight)
            if (containerRef.current) {
                containerRef.current.style.height = `${window.innerHeight}px`
            }
        }

        updateHeight()
        window.addEventListener('resize', updateHeight)
        return () => window.removeEventListener('resize', updateHeight)
    }, [])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleScroll = () => {
            const scrollTop = container.scrollTop
            const newIndex = Math.round(scrollTop / windowHeight)
            setActiveIndex(newIndex)
        }

        container.addEventListener('scroll', handleScroll)
        return () => container.removeEventListener('scroll', handleScroll)
    }, [windowHeight])

    const scrollToProject = (index: number) => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: index * windowHeight,
                behavior: 'smooth'
            })
        }
    }

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
            </div>

            <div className="relative h-screen w-full sm:top-16">
                <div
                    ref={containerRef}
                    className="h-screen w-full overflow-y-scroll scrollbar-hide"
                >
                    <div style={{ height: `${projects.length * 100}vh` }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="h-screen w-full flex items-center justify-center p-4"
                                style={{ position: 'sticky', top: 0 }}
                            >
                                <motion.div
                                    className="relative bg-gray-900 rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden border border-gray-700"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{
                                        scale: activeIndex === index ? 1 : 0.95,
                                        opacity: activeIndex === index ? 1 : 0.6,
                                        filter: activeIndex === index ? 'blur(0px)' : 'blur(2px)'
                                    }}
                                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                                >
                                    <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                                    </div>

                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-300 mb-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.tech.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-800 rounded-full text-xs text-teal-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            <a
                                                href={project.github}
                                                className="flex items-center gap-1 text-xs md:text-sm text-gray-300 hover:text-teal-300 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FiGithub className="h-4 w-4" />
                                                Code
                                            </a>
                                            <a
                                                href={project.demo}
                                                className="flex items-center gap-1 text-xs md:text-sm text-gray-300 hover:text-teal-300 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FiExternalLink className="h-4 w-4" />
                                                Demo
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToProject(index)}
                            className={`w-2 h-2 rounded-full transition-all ${activeIndex === index
                                    ? 'bg-teal-400 scale-125'
                                    : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10">
                <Footer />
            </div>
        </>
    )
}

