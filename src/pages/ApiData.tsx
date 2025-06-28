import React, { useState } from 'react';
import Button from '../components/Button';

const ApiData: React.FC = () => {
  const [search, setSearch] = useState('');
  // Placeholder for loading, error, and data states
  const loading = false;
  const error = '';
  const data: any[] = [];

  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">API Data Explorer</h2>
      <form className="flex gap-2 mb-6">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="flex-grow px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
        />
        <Button type="submit" variant="primary">Search</Button>
      </form>
      {loading && <div className="text-center text-blue-500">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over data here */}
        {data.length === 0 && !loading && !error && (
          <div className="col-span-full text-center text-gray-500 dark:text-gray-400">No data to display.</div>
        )}
      </div>
    </section>
  );
};

export default ApiData; 