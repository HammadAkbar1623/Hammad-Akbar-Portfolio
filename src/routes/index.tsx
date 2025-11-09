import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion";
import { useMemo } from "react";
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import Code from '../assets/code.js.png';


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {


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

      <div className="relative">


        <Navbar />

        {/* Background */}
        <div className="fixed inset-0 bg-black overflow-hidden z-0">
          {/* Animated Particles */}
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

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(100,100,255,0.1)_0,_rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />

          {/* Scanning Line Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>


        <div className="relative z-10 flex items-center justify-center sm:top-30 top-5"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 w-full mx-auto"> 
            <div className='rounded-md min-h-[100px]'>
              <span className='sm:text-7xl text-4xl font-bold text-white'>Hello <h1>I'm <h2 className='text-teal-400'>Hammad Akbar</h2></h1></span>
              <div className=" rounded-xl border">

                <div className="relative group mt-6">                   
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="inline-block backdrop-blur-sm bg-white/5 px-6 py-3 rounded-lg border hover:border-teal-400/30 transition-all duration-300"
                  >
                    <span className="text-lg sm:text-xl text-teal-400 font-medium tracking-wide">
                      Full Stack Developer
                    </span>
                  </motion.div>
                  

                  {/* Outer glow */}
                 </div>

              </div>
            </div>


            <div className='rounded-md min-h-[100px] flex items-center justify-center'>
              <img src= {Code} alt="" />
            </div>
          </div>
        </div>


      </div>

      
      
      <div className="relative z-10 sm:top-15 top-5">
        <About /> 
      </div>


      <div className="relative z-10 sm:top-15 top-5">
        <Footer /> 
      </div>

    </>
  )
}
