import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Menu = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </button>

      <div
        className={`absolute right-0 container mx-auto mt-12 py-2 w-screen bg-white rounded-lg shadow-xl transform duration-500 ${isOpen ? 'block' : 'hidden'}`}
      >
        <Link to="/" className="block px-4 py-2 text-gray-800 transform hover:bg-gray-200 duration-500" onClick={onClose}>Home</Link>
        <Link to="/About" className="block px-4 py-2 text-gray-800 transform hover:bg-gray-200 duration-500" onClick={onClose}>About</Link>
        <Link to="/Contact" className="block px-4 py-2 text-gray-800 transform hover:bg-gray-200" onClick={onClose}>Contact</Link>
      </div>
    </div>
  );
};

export default Menu;
