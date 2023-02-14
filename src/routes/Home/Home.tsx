import React from "react";
import { Navbar } from "../../components/Pages/Navbar/Navbar";
import { HeroImg } from "../../components/Pages/HeroImg/HeroImg";
import "../../components/Pages/Navbar/Navbar.scss";
import "../../components/Pages/HeroImg/HeroImg.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
    </div>
  );
};

export default Home;
