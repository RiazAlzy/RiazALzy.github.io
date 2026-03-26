import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ aboutContent }: { aboutContent: string }) => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-10 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Profile Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 lg:order-none group max-w-sm lg:max-w-md mx-auto w-full flex flex-col items-center"
        >
          {/* Image and Glow Wrapper */}
          <div className="relative w-full">
            <div className="absolute -inset-4 bg-indigo-100/50 rounded-3xl blur-2xl group-hover:bg-indigo-200/50 transition-colors duration-700"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Name Display Added Here */}
          <div className="mt-8 text-center relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
              Riaz Ali Sekh
            </h3>
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Aspiring Developer</h2>
            
            {/* Reduced text size from 7xl to 5xl */}
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] mb-5">
              Software Engineer <br />
              <span className="text-slate-400">Systems Architect</span>
            </h1>
            
            {/* Reduced text size to base and space-y to 3 */}
            <div className="max-w-xl text-base text-slate-600 leading-relaxed space-y-3">
              {aboutContent.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 pt-2"
          >
            {/* Reduced button padding and text size */}
            <a 
              href="#projects" 
              className="px-6 py-3 bg-slate-900 text-white text-sm rounded-xl font-semibold shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 glass-morphism text-slate-900 text-sm border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all hover:-translate-y-1 active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;