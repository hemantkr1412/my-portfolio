import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 group-hover:from-primary-500/30 group-hover:to-purple-500/30 transition-all duration-300">
          <div className="flex items-center justify-center h-full text-6xl text-primary-600/30 dark:text-primary-400/30">
            💼
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'featured') return project.featured;
    return true;
  });

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/10 to-transparent dark:via-primary-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured 
            <span className="text-primary-600 dark:text-primary-400"> Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on, showcasing different technologies and problem-solving approaches
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            >
              <FaFilter className="inline mr-2" />
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'featured' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            >
              Featured Only
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 max-w-2xl mx-auto text-white">
            <div className="text-4xl mb-4">
              <FaGithub className="inline" />
            </div>
            <h3 className="text-2xl font-bold mb-4">More on GitHub</h3>
            <p className="text-gray-300 mb-6">
              Check out more of my projects and contributions on GitHub, including open-source work and experimental projects.
            </p>
            <a
              href="https://github.com/hemantkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaGithub />
              Visit GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
