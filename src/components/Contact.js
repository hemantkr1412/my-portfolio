import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import { contactInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary-200 to-purple-200 dark:from-primary-800 dark:to-purple-800 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-800 dark:to-orange-800 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's 
              <span className="text-primary-600 dark:text-primary-400"> Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaUser className="inline mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaEnvelope className="inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FaComment className="inline mr-2" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-vertical"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 text-white transform hover:-translate-y-1'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="text-green-600 dark:text-green-400 text-sm text-center">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="text-red-600 dark:text-red-400 text-sm text-center">
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Get in touch
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg mr-4">
                        <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                        <p className="text-gray-900 dark:text-white font-medium">{contactInfo.email}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Follow me on
                      </h4>
                      <div className="flex space-x-4">
                        {contactInfo.social.map((social, index) => {
                          const IconComponent = social.icon;
                          return (
                            <motion.a
                              key={social.name}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                              className={`p-3 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-300 ${social.color} hover:shadow-lg`}
                              title={social.name}
                            >
                              <IconComponent className="text-xl" />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    💬 Let's discuss
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• New project opportunities</li>
                    <li>• Technical consultations</li>
                    <li>• Collaboration ideas</li>
                    <li>• Freelance work</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
