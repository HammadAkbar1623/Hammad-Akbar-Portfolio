import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowLeft, FiGithub, FiExternalLink, FiUser, FiCode } from 'react-icons/fi'
import { projects } from '../../project-data.ts'
import { useRouter } from '@tanstack/react-router'
export const Route = createFileRoute('/projects/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()
  const containerRef = useRef<HTMLDivElement>(null)
  const [windowHeight, setWindowHeight] = useState(0)

  const router = useRouter()
  const navigateToContact = () => {
    router.navigate({ to: '/contact' })
  }

  // Find the project by ID
  const project = projects.find(p => p.id === id)

  const particlesCount = 80
  const particles = useMemo(() => {
    return Array.from({ length: particlesCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      offset: Math.random() * 100,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.7 ? 'bg-purple-400' : 'bg-blue-400'
    }))
  }, [])

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  // If project not found, show error message
  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-black overflow-hidden z-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full ${particle.color}`}
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

        <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
          <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-700 max-w-md w-full text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-300 mb-6">The case study you're looking for doesn't exist.</p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors"
            >
              <FiArrowLeft /> Back to Projects
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const caseStudy = project.caseStudy

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-black overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${particle.color}`}
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

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-teal-300 transition-colors mb-8 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main
        ref={containerRef}
        className="relative z-10 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-gray-900/80 to-purple-900/30 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-300 to-purple-300 bg-clip-text text-transparent mb-4">
                    {caseStudy.title}
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {caseStudy.overview}
                  </p>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <FiGithub />
                        View Code
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors"
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Stack Pill */}
                <div className="lg:w-80">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <FiCode className="text-teal-400" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Problem & Solution */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    The Problem
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    The Solution
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </motion.section>

              {/* Features */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseStudy.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-600"
                    >
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Tech Stack Details */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Technical Implementation</h2>
                <div className="grid gap-4">
                  {caseStudy.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-600"
                    >
                      <div className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Outcome */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-teal-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 border border-teal-500/20"
              >
                <h2 className="text-xl font-bold text-white mb-4">Outcome</h2>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudy.outcome}
                </p>
              </motion.section>

              {/* My Role */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700"
              >
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiUser className="text-teal-400" />
                  My Role
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudy.role}
                </p>
              </motion.section>

              {/* Key Features Summary */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700"
              >
                <h2 className="text-xl font-bold text-white mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {caseStudy.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* CTA */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-gradient-to-r from-purple-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 text-center"
              >
                <h3 className="text-lg font-bold text-white mb-3">Let's Work Together</h3>
                <p className="text-gray-300 text-sm mb-4">
                  I help founders launch MVPs fast with MERN or Next js.
                </p>
                <button type="button" onClick={navigateToContact} className="text-teal-300 cursor-pointer text-sm font-medium border border-teal-300 px-4 py-2 rounded-lg hover:bg-teal-300 hover:text-white transition-colors duration-300">
                  Contact Me
                </button>
              </motion.section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}