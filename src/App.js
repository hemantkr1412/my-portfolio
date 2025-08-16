import React from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import DevOps from './components/DevOps';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Hooks
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="App">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <Skills />
        
        <DevOps />
        
        <Projects />
        
        <Experience />
        
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                HK
              </div>
              <span className="text-xl font-bold">Hemant Kumar</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Full Stack Developer passionate about creating amazing web experiences
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/hemantkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/hemantkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hemant@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Email
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Hemant Kumar. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
