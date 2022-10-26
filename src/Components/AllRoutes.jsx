import { Route, Routes } from "react-router-dom";
import React from "react";
import About from "../Headers/About";
import Contact from "../Headers/Contact";
import Project from "../Headers/Project";
import Resume from "../Headers/Resume";
import Skills from "../Headers/Skills";
import Home from "../Headers/Home";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" ></Route>
        <Route path="/about" ></Route>
        <Route path="/contact" ></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/skill" element={<Skills />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
