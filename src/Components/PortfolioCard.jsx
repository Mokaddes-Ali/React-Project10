import React, { useState } from 'react';

const PortfolioCard = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setShowText(true);
    }, 150); // Delay of 1000ms (1 second)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowText(false);
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />
      {isHovered && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 transition-opacity duration-300 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioCard;
