import { createFileRoute } from '@tanstack/react-router'
import { FaUser, FaEnvelope, FaBookOpen, FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import emailjs from '@emailjs/browser'

export const Route = createFileRoute('/contact/')({
  component: ContactComponent,
})

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_PUBLIC_KEY) // Your public key
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID, // Your template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
      // Clear status message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

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

      <div className="min-h-screen bg-gradient-to-br sm:pt-28 from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={formVariants}
          className="w-full max-w-2xl bg-gray-800/30 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700/50"
        >
          <div className="p-8 sm:p-12 space-y-8">
            <motion.div 
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Contact Me
              </h2>
              <p className="text-gray-400 text-lg">
                Have a project in mind? Let's make it reality.
              </p>
            </motion.div>

            <form 
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <motion.div variants={itemVariants} className="relative">
                  <div className="absolute top-4 left-4 text-cyan-400">
                    <FaUser className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-700/20 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none placeholder-gray-500 text-gray-200 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <div className="absolute top-4 left-4 text-cyan-400">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-700/20 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none placeholder-gray-500 text-gray-200 transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="relative">
                <div className="absolute top-4 left-4 text-cyan-400">
                  <FaBookOpen className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-700/20 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none placeholder-gray-500 text-gray-200 transition-all"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <textarea
                  rows={4}
                  placeholder="Your Message..."
                  className="w-full px-4 py-3.5 bg-gray-700/20 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none placeholder-gray-500 text-gray-200 transition-all"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <FaSpinner className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-center text-green-400">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-center text-red-400">
                    Failed to send message. Please try again.
                  </p>
                )}
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}