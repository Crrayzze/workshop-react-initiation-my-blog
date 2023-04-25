import React from "react";
import { ArticleCard } from "../../components/articleCard/articleCard";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <h1 className="page-title">Home</h1>
      <ArticleCard />
    </div>
  );
}