import "./news.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./newsItem";
import Slider from "react-slick";

const ClimateNews = () => {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=climate&apiKey=d5fd3af03a2f47f29b134e07e33d8ea8"
      );
      setArticle(response.data.articles);
    };
    getArticles();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-holder">
      <h4 className="article-title">
        Explore the lates news <br /> about Climate Changes
      </h4>
      <Slider {...settings}>
        {articles.map((article) => {
          return (
            <NewsItem
              key={article.source.id}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default ClimateNews;
