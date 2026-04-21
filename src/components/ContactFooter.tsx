import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FiLinkedin } from 'react-icons/fi';

const ContactFooter = ({ email, github, linkedin }: { email: string, github: string, linkedin: string }) => {
  return (
    <footer id="contact" className="py-32 px-6 bg-slate-900 text-white rounded-t-[3rem] lg:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-bold mb-10 leading-tight">
              Ready to build <br />
              <span className="text-slate-400">the future?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md mb-12">
              Currently seeking new opportunities to apply my technical skills in Python, Django, FastAPI and AI/RAG system development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <div className="space-y-6">
              <a 
                href={`mailto:${email}`}
                className="group flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-widest mb-1">Send an email</p>
                    <p className="text-xl font-bold">{email}</p>
                  </div>
                </div>
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-6">
                <a 
                  href={github}
                  target="_blank"
                  className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300"
                >
                  <SiGithub size={24} />
                  <span className="font-bold">GitHub</span>
                </a>
                <a 
                  href={linkedin}
                  target="_blank"
                  className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300"
                >
                  <FiLinkedin size={24} />
                  <span className="font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 font-medium">© 2026 Portfolio. Designed with care.</p>
          <div className="flex gap-10 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-white transition-colors">BACK TO TOP</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
