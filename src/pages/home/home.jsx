import React from "react";
import { ArticleOverview } from "../../components/articleOverview/articleOverview";
import { articlesList } from "../../data/articles";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <h1 className="page-title">Home</h1>
      <div className="center-gallery">
        {articlesList.map((article) => (
          <ArticleOverview key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
