import React, { useState } from 'react';
import NewsCard from './NewsCard';
import './App.css';
import data from './data/data.json';
import Header from './components/Header';

function App() {
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('India');

  // Handle dropdown change for category
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="app">
      {/* Use the Header component */}
      <Header language={language} setLanguage={setLanguage} />
      
      <div className="category-selector">
        <select value={category} onChange={handleCategoryChange}>
          <option value="India">India</option>
          <option value="Business">Business</option>
          <option value="Politics">Politics</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          {/* Add other categories as needed */}
        </select>
      </div>

      <div className="news-container">
        {data[category]?.[language]?.map((article, index) => (
          <NewsCard key={index} article={article} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default App;
