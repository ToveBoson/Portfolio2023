import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./routes/About/About";
import Contact from "./routes/Contact/Contact";
import Home from "./routes/Home/Home";
import Project from "./routes/Project/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
