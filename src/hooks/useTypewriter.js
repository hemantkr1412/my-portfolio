import { useState, useEffect } from 'react';

const useTypewriter = (texts, speed = 50, deleteSpeed = 30, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(prev => prev.slice(0, -1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        // Typing text
        setDisplayText(currentText.slice(0, displayText.length + 1));
        
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return displayText;
};

export default useTypewriter;
