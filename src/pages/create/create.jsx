import React from "react";
import { articlesList } from "../../data/articles";
import "./create.css";

export const Create = () => {

  const handleSubmit = () => {
    const title = document.querySelector("input[type=text]").value;
    const imageUrl = document.querySelector("input[type=url]").value;
    const content = document.querySelector("textarea").value;

    const newArticle = {
      id: articlesList.length + 1,
      title,
      imageUrl,
      content,
    };

    articlesList.push(newArticle);
  }


  return (
    <div>
      <h1 className="page-title">Create article</h1>
      <div className="create-article-center">
        <div>
          <div className="create-article-top-input">
            <div>
              <h2>Title</h2>
              <input
                type="text"
                className="create-article-input"
                name="title"
              />
            </div>
            <div>
              <h2>Picture URL</h2>
              <input
                type="url"
                className="create-article-input"
                name="picture"
              />
            </div>
          </div>
          <h2>Article</h2>
          <textarea
            name="content"
            rows="8"
            cols="100"
            className="create-article-text"
          />
        </div>
        <button onClick={() => handleSubmit()} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
}