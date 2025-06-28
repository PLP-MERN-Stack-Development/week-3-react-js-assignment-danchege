import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-inner mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Vite</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 