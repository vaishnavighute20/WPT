
import React from 'react';

const NewsDetails = ({ article }) => {
  if (!article) return <p>Select an article to read more.</p>;
  return (
    <div className="news-details">
      <img src={article.urlToImage || '.assets/Business.PNG'} alt="News" />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
    </div>
  );
};

export default NewsDetails;
