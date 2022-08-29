import React from "react";
import "./news.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="news-app">
      <div className="news-item">
        <img alt={urlToImage} className="news-img" src={urlToImage} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
