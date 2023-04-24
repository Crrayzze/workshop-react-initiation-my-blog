import React from "react";
import "./articleOverview.css";
import { useNavigate } from "react-router-dom";

export const ArticleOverview = ({ id, title, content, imageUrl }) => {
  const navigate = useNavigate();

  const getHundredFirstCharacters = (text) => {
    return text.slice(0, 250) + "...";
  };

  const handleClick = () => {
    navigate("/articles/" + id);
  };

  return (
    <div className="article-card" onClick={() => handleClick()}>
      <img src={imageUrl} alt="article" className="article-card-image" />
      <div className="article-card-title">{title}</div>
      <div className="article-card-text-wrapper">
        <div className="article-card-text">
          {getHundredFirstCharacters(content)}
        </div>
      </div>
    </div>
  );
};
