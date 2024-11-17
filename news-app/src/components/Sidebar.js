
import React from 'react';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const Sidebar = ({ setCategory }) => {
  return (
    <nav className="sidebar">
      {categories.map((category) => (
        <button key={category} onClick={() => setCategory(category)}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;
