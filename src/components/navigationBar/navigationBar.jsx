import React from "react";
import "./navigationBar.css";

export const NavigationBar = () => {


  return (
    <nav className="navigation-bar">
      <div
        className="navigation-website-title"
        // onClick={() => handleClick("/")}
      >
        Justine
      </div>
      <div className="navigation-right">
        <div className="navigation-element"
        // onClick={() => handleClick("/")}
        >
          Home
        </div>
        <div
          className="navigation-element"
          // onClick={() => handleClick("/portfolio")}
        >
          Portfolio
        </div>
        <div
          className="navigation-element"
          // onClick={() => handleClick("/aboutMe")}
        >
          About
        </div>
        <button
          className="create-button"
          // onClick={() => handleClick("/createArticles")}
        >
          New article
        </button>
      </div>
    </nav>
  );
}