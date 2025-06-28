import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Tasks', to: '/tasks' },
  { name: 'API Data', to: '/api-data' },
];

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">PLP</span>
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">Task Manager</span>
        </div>
        <div className="flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base font-medium px-2 py-1 rounded transition-colors duration-150 ${location.pathname === link.to ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-600" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 