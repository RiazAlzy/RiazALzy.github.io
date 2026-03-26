import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  highlights: string[];
  link?: string;
}

const ProjectSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Selected Works</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A curated selection of technical projects demonstrating my expertise in software engineering, development, management and system architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                    {project.title[0]}
                  </div>
                  <div className="flex gap-4">
                    {project.link && (
                      <a href={project.link} target="_blank" className="p-2 bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors">
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                      <span className="text-sm text-slate-500 leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
