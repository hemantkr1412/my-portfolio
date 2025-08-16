import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const SkillCard = ({ skill, delay = 0 }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            delay={delay + index * 0.1} 
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    { title: "Languages", skills: skillsData.languages, key: "languages" },
    { title: "Frontend", skills: skillsData.frontend, key: "frontend" },
    { title: "Backend", skills: skillsData.backend, key: "backend" },
    { title: "Mobile/App", skills: skillsData.mobile, key: "mobile" },
    { title: "Web3", skills: skillsData.web3, key: "web3" },
    { title: "AI", skills: skillsData.ai, key: "ai" },
    { title: "Databases", skills: skillsData.databases, key: "databases" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & 
            <span className="text-primary-600 dark:text-primary-400"> Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.key}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
