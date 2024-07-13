import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import DarkMode from './DarkMode';

function Navbars() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dark:text-white">
      <nav className="p-12 w-screen">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link to="/">MyApp</Link>
          </div>
          <div>
            <DarkMode />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white"
          >
            ☰
          </button>
          <div className={`w-full container md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <Menu onClose={toggleMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;
