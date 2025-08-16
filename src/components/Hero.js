import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { heroData, personalInfo } from '../data/portfolioData';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
  const typewriterText = useTypewriter(heroData.typewriterTexts, 100, 50, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    window.open(personalInfo.resume, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 dark:bg-yellow-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                {heroData.greeting}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mt-2">
                {heroData.name}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-600 dark:text-primary-400 h-12 flex items-center justify-center lg:justify-start">
                {typewriterText}
                <span className="ml-1 animate-pulse">|</span>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {heroData.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleContactClick}
                className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleResumeClick}
                className="group bg-white dark:bg-gray-800 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Illustration/Avatar */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Placeholder for developer illustration - you can replace with actual SVG or Lottie */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-gradient-to-br from-primary-500 to-purple-700 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  HK
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl shadow-lg"
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-8 h-8 bg-purple-400 rounded-full shadow-lg"
                animate={{
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
