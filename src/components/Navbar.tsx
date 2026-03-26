import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass-morphism px-8 py-4 rounded-full flex justify-between items-center shadow-sm">
        <a href="#" className="font-bold text-xl tracking-tight text-slate-900">
          RiazAlzy
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all active:scale-95"
        >
          Let's talk
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
