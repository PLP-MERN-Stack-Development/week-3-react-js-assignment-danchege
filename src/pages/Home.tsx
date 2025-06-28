import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-gradient-to-r from-purple-500 to-pink-500 p-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg animate-pulse">
        Welcome to PLP Task Manager
      </h1>
      <p className="text-lg md:text-xl text-white mb-8 max-w-2xl bg-black/20 p-4 rounded-lg backdrop-blur">
        Organize your tasks, stay productive, and explore public API data. Switch between light and dark mode for your comfort.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link to="/tasks">
          <Button size="lg" variant="primary" className="bg-green-500 hover:bg-green-600">Manage Tasks</Button>
        </Link>
        <Link to="/api-data">
          <Button size="lg" variant="secondary" className="bg-blue-500 hover:bg-blue-600 text-white">Explore API Data</Button>
        </Link>
      </div>
    </section>
  );
};

export default Home; 