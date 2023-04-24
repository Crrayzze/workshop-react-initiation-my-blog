import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./home/home";
import { About } from "./about/about";
import { Create } from "./create/create";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}