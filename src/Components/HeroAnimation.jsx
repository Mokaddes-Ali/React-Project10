import React, { useEffect, useState } from 'react';

const HeroAnimation = () => {
  const [index, setIndex] = useState(0);
  const phrases = ['graphic design', 'web developer', 'software engineer'];
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(phrases[index].substring(0, currentText.length + 1));
      if (currentText === phrases[index]) {
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setCurrentText('');
        }, 1000); // Pause at the end of the phrase
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentText, index, phrases]);

  return (
    <div className="flex items-center space-x-2">
      <span className="font-bold">A</span>
      <span className="font-bold">{currentText}</span>
      <span className="typed-cursor" aria-hidden="true">|</span>
    </div>
  );
};

export default HeroAnimation;

// Add these styles in a style tag or in your global CSS file
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .typed-cursor {
    animation: blink 1s infinite;
  }
`;
document.head.appendChild(style);
