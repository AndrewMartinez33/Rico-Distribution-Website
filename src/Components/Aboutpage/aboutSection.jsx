import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import MainImage from "./images/mainimage.jpg";

const About = () => {
  return (
    <div className="centered-column about-section">
      <div className="centered-row flex-justify-start">
        <div className="title-line" />
        <h1 className="about-title">about me</h1>
        <div className="title-line" />
      </div>
      <img className="main-image" src={MainImage} alt="mainImage" />
      <div className="about-text-container">
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro
          exercitationem ea reprehenderit numquam expedita deserunt optio dolore
          ratione ex quisquam eaque cum saepe reiciendis soluta, voluptas eos
          animi hic aspernatur quas doloremque. Quod, enim repudiandae?
          Veritatis officiis debitis deserunt maiores tempore neque itaque velit
          eos! Fugit optio, voluptatibus, consectetur esse voluptates nam nulla
          facilis sunt suscipit cum molestias voluptatum asperiores nemo,
          voluptate iure enim id? Voluptatum, atque aliquam possimus ea
          distinctio impedit nihil incidunt quas a blanditiis vel libero
          consequuntur mollitia illo reprehenderit quae dolor expedita? Eum
          molestiae quis, aliquid dolores amet animi aut tempore totam illum
          esse architecto!
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro
          exercitationem ea reprehenderit numquam expedita deserunt optio dolore
          ratione ex quisquam eaque cum saepe reiciendis soluta, voluptas eos
          animi hic aspernatur quas doloremque. Quod, enim repudiandae?
          Veritatis officiis debitis deserunt maiores tempore neque itaque velit
          eos! Fugit optio, voluptatibus, consectetur esse voluptates nam nulla
          facilis sunt suscipit cum molestias voluptatum asperiores nemo,
          voluptate iure enim id? Voluptatum, atque aliquam possimus ea
          distinctio impedit nihil incidunt quas a blanditiis vel libero
          consequuntur mollitia illo reprehenderit quae dolor expedita? Eum
          molestiae quis, aliquid dolores amet animi aut tempore totam illum
          esse architecto!
        </p>
      </div>
    </div>
  );
};

export default About;
