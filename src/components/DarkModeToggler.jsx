import React from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Moon, SunMedium } from './../assets/icons';

const DarkModeToggler = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button 
      onClick={toggleDarkMode} 
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
    >
      {darkMode ? <SunMedium className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  );
};

export default DarkModeToggler;
