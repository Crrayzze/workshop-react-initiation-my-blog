import React from "react";
import { articlesList } from "../../data/articles";
import { ArticleCard } from "../../components/articleCard/articleCard";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <h1 className="page-title">Home</h1>
      <div className="center-gallery">
        <div className="article-gallery">
          {articlesList.map((article) => (
            <ArticleCard {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};
