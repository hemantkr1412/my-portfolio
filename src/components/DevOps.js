import React from 'react';
import { motion } from 'framer-motion';
import { devopsData } from '../data/portfolioData';

const DevOpsCard = ({ tool, index }) => {
  const IconComponent = tool.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`text-5xl mb-4 ${tool.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
          <IconComponent />
        </div>
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {tool.name}
        </h3>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
};

const DevOps = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="devops" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-green-100 to-yellow-100 dark:from-green-900/20 dark:to-yellow-900/20 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Deployment &{' '}
            <span className="text-primary-600 dark:text-primary-400">DevOps Tools</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools and technologies I use for deployment, version control, and infrastructure management
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {devopsData.map((tool, index) => (
            <DevOpsCard key={tool.name} tool={tool} index={index} />
          ))}
        </motion.div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cloud & Infrastructure Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experienced in setting up CI/CD pipelines, managing cloud infrastructure, 
              and ensuring scalable, secure deployments for production applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-primary-600 dark:text-primary-400 text-3xl mb-2">☁️</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Cloud Platforms</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Digital Ocean, Vercel</p>
              </div>
              <div className="text-center">
                <div className="text-primary-600 dark:text-primary-400 text-3xl mb-2">🔄</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">CI/CD</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">GitHub Actions, GitLab CI</p>
              </div>
              <div className="text-center">
                <div className="text-primary-600 dark:text-primary-400 text-3xl mb-2">🛠️</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Monitoring</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">CloudWatch, PM2, Logs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOps;
