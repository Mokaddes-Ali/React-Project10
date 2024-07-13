import React, { useState } from 'react';
import PortfolioCard from '../Components/PortfolioCard';
import image1 from '../assets/Images/1.jpg';
import image2 from '../assets/Images/2.jpg';
import image3 from '../assets/Images/3.jpg';
import image4 from '../assets/Images/4.jpg';
import image5 from '../assets/Images/5.jpg';
import image6 from '../assets/Images/6.jpg';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const cards = [
    { id: 1, category: 'Mockup', image: image1, title: 'Mockup Design 1', description: 'Description for Mockup Design 1' },
    { id: 2, category: 'Mockup', image: image2, title: 'Mockup Design 2', description: 'Description for Mockup Design 2' },
    { id: 3, category: 'Mockup', image: image3, title: 'Mockup Design 3', description: 'Description for Mockup Design 3' },
    { id: 4, category: 'Graphic Design', image: image4, title: 'Graphic Design 1', description: 'Description for Graphic Design 1' },
    { id: 5, category: 'Graphic Design', image: image5, title: 'Graphic Design 2', description: 'Description for Graphic Design 2' },
    { id: 6, category: 'Logo', image: image6, title: 'Logo Design 1', description: 'Description for Logo Design 1' },
    { id: 7, category: 'Logo', image: image1, title: 'Logo Design 2', description: 'Description for Logo Design 2' },
    { id: 8, category: 'Logo', image: image2, title: 'Logo Design 3', description: 'Description for Logo Design 3' },
    { id: 9, category: 'All', image: image3, title: 'Additional Design 1', description: 'Description for Additional Design 1' },
    { id: 10, category: 'All', image: image4, title: 'Additional Design 2', description: 'Description for Additional Design 2' },
    { id: 11, category: 'All', image: image5, title: 'Additional Design 3', description: 'Description for Additional Design 3' },
    { id: 12, category: 'All', image: image6, title: 'Additional Design 4', description: 'Description for Additional Design 4' },
  ];

  const getFilteredCards = () => {
    switch (activeCategory) {
      case 'All':
        return cards;
      default:
        return cards.filter(card => card.category === activeCategory);
    }
  };

  const filteredCards = getFilteredCards();

  return (
    <div id="portfolio" className="container mx-auto py-8 px-4">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 mr-2 rounded focus:outline-none ${activeCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          All
        </button>
        <button
          onClick={() => setActiveCategory('Mockup')}
          className={`px-4 py-2 mr-2 rounded focus:outline-none ${activeCategory === 'Mockup' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Mockup
        </button>
        <button
          onClick={() => setActiveCategory('Graphic Design')}
          className={`px-4 py-2 mr-2 rounded focus:outline-none ${activeCategory === 'Graphic Design' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Graphic Design
        </button>
        <button
          onClick={() => setActiveCategory('Logo')}
          className={`px-4 py-2 rounded focus:outline-none ${activeCategory === 'Logo' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Logo
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCards.map(card => (
          <PortfolioCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
