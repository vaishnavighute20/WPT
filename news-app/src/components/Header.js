
import React from 'react';

const Header = ({ language, setLanguage }) => {
  return (
    <header className="header">
      <h1>INSHORT-NEWS24</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </header>
  );
};

export default Header;
