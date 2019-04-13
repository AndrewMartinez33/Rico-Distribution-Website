import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Homepage/Hero";
import Alkaline from "./Homepage/AlkalineWater";
import Kangen from "./Homepage/KangenWater";
import Testimonials from "./Homepage/Testimonials";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Alkaline />
      <Kangen />
      <Testimonials />
    </React.Fragment>
  );
};

export default Home;
