import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { experienceData } from '../data/portfolioData';

const ExperienceCard = ({ experience, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center mb-12 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-1/2 top-16 w-px h-24 bg-gradient-to-b from-primary-300 to-primary-500 dark:from-primary-700 dark:to-primary-500 hidden md:block transform -translate-x-1/2"></div>
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block transform -translate-x-1/2 z-10"></div>
      
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          {/* Company & Role */}
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <FaBriefcase className="text-primary-600 dark:text-primary-400 text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {experience.role}
              </h3>
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                {experience.company}
              </h4>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FaCalendarAlt className="mr-2" />
                {experience.duration}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block w-5/12"></div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work 
            <span className="text-primary-600 dark:text-primary-400"> Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main timeline line for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300 to-primary-500 dark:from-primary-700 dark:to-primary-500 md:hidden"></div>
          
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together to build something amazing.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
