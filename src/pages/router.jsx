import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Portfolio } from "./portfolio/portfolio";
import { Create } from "./create/create";
import { Read } from "./read/read";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/create" element={<Create />} />
      <Route path="/read/:id" element={<Read />} />
    </Routes>
  );
}