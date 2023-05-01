import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navigationBar.css";

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
        Justine
      </div>
      <div className="navigation-right">
        <div className="navigation-element" onClick={() => handleClick("/")}>
          Home
        </div>
        <div
          className="navigation-element"
          onClick={() => handleClick("/portfolio")}
        >
          Portfolio
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
          New article
        </button>
      </div>
    </nav>
  );
};
