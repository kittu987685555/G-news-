import React from 'react';

const NewsCard = ({ article }) => {
    return (
        <div className="news-card">
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
            </a>
        </div>
    );
};

export default NewsCard;
