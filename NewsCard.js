// src/components/NewsCard.js
import React from 'react';
import './styles/NewsCard.css'

const NewsCard = ({ article, onClick }) => {
  return (
    <div className="news-card" onClick={() => onClick(article)}>
      <img 
        src={article.urlToImage || '/assets/Business.PNG'} 
        alt="News " 
        className="news-card-image" 
      />
      <div className="news-card-content">
        <h2 className="Air-Image">{article.title}</h2>
        <p className="news-card-description">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
