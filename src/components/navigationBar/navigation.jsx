import React from "react";
import "./navigationBar.css";
import { useNavigate, useLocation } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <nav className="navigation-bar">
      <div
        className="navigation-website-title"
        onClick={() => handleClick("/")}
      >
        Name
      </div>
      <div className="navigation-right">
        <div className="navigation-element" onClick={() => handleClick("/")}>
          Home
        </div>
        <div
          className="navigation-element"
          onClick={() => handleClick("/about")}
        >
          About
        </div>
        <button
          className="create-button"
          onClick={() => handleClick("/create")}
        >
          Create article
        </button>
      </div>
    </nav>
  );
};
