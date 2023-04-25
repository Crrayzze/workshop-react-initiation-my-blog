import React from "react";
import { ArticleCard } from "../../components/articleCard/articleCard";
import "./home.css";
import { articlesList } from "../../data/articles";

export const Home = () => {
  return (
    <div>
      <h1 className="page-title">Home</h1>
      <div className="article-gallery">
        {articlesList.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
