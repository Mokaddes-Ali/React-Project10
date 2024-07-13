import React, { useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const DarkMode = () => {
  const [darkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-center rounded-full bg-white">
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-white hover:bg-blue-900 dark:bg-blue-900 rounded-full"
      >
        {darkMode ? (
          <IoMdSunny className="w-6 h-6 text-black" />
        ) : (
          <FaMoon className="w-6 h-6 text-black" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
