import React, { useState } from "react";
import { articlesList } from "../../data/articles";
import "./create.css";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [article, setArticle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleArticleChange = (event) => {
    setArticle(event.target.value);
  };

  const handleSubmit = () => {
    const newArticle = {
      id: articlesList.length + 1,
      title: title,
      imageUrl: imageUrl,
      content: article,
    };
    articlesList.push(newArticle);
  };

  return (
    <div>
      <h1 className="page-title">Create article</h1>
      <div className="create-article-center">
        <div>
          <div className="create-article-top-input">
            <div>
              <h2 className="create-article-title">Title</h2>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
                className="create-article-input"
              />
            </div>
            <div>
              <h2 className="create-article-title">Picture URL</h2>
              <input
                type="url"
                placeholder="Image URL"
                value={imageUrl}
                onChange={handleImageUrlChange}
                className="create-article-input"
              />
            </div>
          </div>
          <h2 className="create-article-title">Article</h2>
          <textarea
            placeholder="Article"
            value={article}
            onChange={handleArticleChange}
            className="create-article-text"
            rows="8"
            cols="100"
          />
        </div>
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};
