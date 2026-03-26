import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

const ExperienceEducation = ({ experience, education }: { experience: Experience[], education: Education[] }) => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Experience Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-12"
          >
            Experience
          </motion.h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-100"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 shadow-xl"></div>
                <p className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-widest">{exp.period}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                <p className="text-slate-500 font-medium mb-4">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed max-w-lg">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-12"
          >
            Education
          </motion.h2>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-500 shadow-sm"
              >
                <p className="text-sm font-bold text-indigo-600 mb-2 uppercase tracking-widest">{edu.period}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.institution}</h3>
                <p className="text-slate-500 font-medium mb-4">{edu.degree}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
