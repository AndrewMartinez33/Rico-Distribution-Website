import React from "react";
import { Link } from "react-router-dom";
import productLine from "./images/hero-product-line.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="centered-column hero-container">
      <div className="centered-column hero-text">
        <h1 className="home-hero-title">Kangen Water</h1>
        <h2 className="home-hero-subtitle">
          Producing the Best Alkaline Water on the Planet Since 1974
        </h2>
      </div>
      <div className="hero-img-container">
        <img
          className="responsive-img"
          src={productLine}
          alt="kangen product line"
        />
      </div>
      <Link className="btn btn-danger shadow" to="/contact">
        Contact Us
      </Link>
      <div className="hero-right-angle" />
    </div>
  );
};

export default Hero;
