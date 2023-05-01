import React from "react";
import { useParams } from "react-router-dom";
import { articlesList } from "../../data/articles";
import "./read.css";

export const Read = () => {
  const { id } = useParams();
  const article = articlesList[id - 1]
  console.log("article")

  return (
    <div>
      <img src={article.imageUrl} alt="article" className="read-image" />
      <div className="read-content-container">
        <h1 className="read-title">{article.title}</h1>
        <p className="read-content">{article.content}</p>
      </div>
    </div>
  );
};
