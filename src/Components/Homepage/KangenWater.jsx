import React from "react";
import { Link } from "react-router-dom";
import "./kangenWater.css";
import placeholder from "./images/placeholder.jpg";

const Kangen = () => {
  return (
    <div className="kangen-container centered-row">
      <div className="kangen-left-angle" />
      <div className="kangen-bottom-left-angle" />
      <div className="kangen-bottom-right-angle" />
      <div className="kangen-container centered-column">
        <div>
          <h1 className="kangen-title">Why Kangen Machines?</h1>
        </div>
        <div className="kangen-summary">
          <p className="kangen-text">
            Oxidative stress is caused by free radicals that are present
            everywhere in our environment. We’ve all seen the effects of
            oxidation in nature: metals rusting, plants decomposing, fruits
            decomposing, our skin wrinkling as we age, etc. Kangen Water®
            contains 3 properties that combat oxidative stress; Alkalinity,
            antioxidation, and micro-clustering.
          </p>
        </div>
        <div className="space-between-row flex-align-start features-container">
          <div className="column-centered kangen-feature">
            <img
              className="responsive-img feature-img zoom shadow"
              src={placeholder}
              alt="hello"
            />
            <div>
              <p className="kangen-subtitle">Various Types of Water</p>
            </div>
            <div>
              <p className="kangen-text">
                Our machines can produce water for different uses. Healthy
                drinking water (pH 8.5- 9.5) Beauty Water (pH 4.5 - 6.0) for
                face and skincare regimens. Strong alkaline water (pH 11.5) to
                clean and remove pesticides from food, Strong acidic water (ph
                2.5) to disinfect, sterilize, and sanitize, and clean water (pH
                7.0) for baby formula and medications.
              </p>
            </div>
          </div>
          <div className="column-centered kangen-feature">
            <img
              className="responsive-img feature-img zoom shadow"
              src={placeholder}
              alt="hello"
            />
            <div>
              <p className="kangen-subtitle">Japanese Craftsmanship</p>
            </div>
            <div>
              <p className="kangen-text">
                Each of our machines is built in Japan and individually
                assembled by artisans. After assembly, each machine is then
                inspected, tested, and certified by highly-trained quality
                control engineers.
              </p>
            </div>
          </div>
          <div className="column-centered kangen-feature">
            <img
              className="responsive-img feature-img zoom shadow"
              src={placeholder}
              alt="hello"
            />
            <div>
              <p className="kangen-subtitle">Chemical-Free Technology</p>
            </div>
            <div>
              <p className="kangen-text">
                Chemical-Free Technology Kangen Water® machines use a simple
                process to keep your alkaline water chemical-free. First, the
                water goes through a three-layer carbon filter to remove
                impurities in the water. Then, a set of platinum-coated
                electrodes introduce an electrical charge to the water,
                beginning the electrolysis process. Lastly, at the push of a
                button the machine produces water at your desired pH level and
                the electrodes are automatically cleaned.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kangen;
