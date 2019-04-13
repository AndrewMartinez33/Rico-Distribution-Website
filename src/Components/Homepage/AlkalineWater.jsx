import React from "react";
import { Link } from "react-router-dom";
import "./alkalineWater.css";
import placeholder from "./images/placeholder.jpg";

const Alkaline = () => {
  return (
    <div className="alkaline-container centered-column">
      <div>
        <h1 className="alkaline-title">Why Alkaline Water?</h1>
      </div>
      <div className="alkaline-summary">
        <p className="alkaline-text">
          Oxidative stress is caused by free radicals that are present
          everywhere in our environment. We’ve all seen the effects of oxidation
          in nature: metals rusting, plants decomposing, fruits decomposing, our
          skin wrinkling as we age, etc. Kangen Water® contains 3 properties
          that combat oxidative stress; Alkalinity, antioxidation, and
          micro-clustering.
        </p>
      </div>
      <div className="space-between-row flex-align-start features-container">
        <div className="column-centered alkaline-feature">
          <img
            className="responsive-img feature-img zoom shadow"
            src={placeholder}
            alt="hello"
          />
          <div>
            <p className="alkaline-subtitle">Antioxidation</p>
          </div>
          <div>
            <p className="alkaline-text">
              Oxidation can’t be stopped, but the process can be slowed down
              with antioxidants. Antioxidants in liquids can be measured using
              an ORP meter. The higher the negative reading, the more effective
              the reduction of oxidative stress from your body, minimizing the
              risk of cancer and onset of other diseases. Kangen Water® has the
              highest antioxidant measurement compared to any liquid on the
              planet.
            </p>
          </div>
        </div>
        <div className="column-centered alkaline-feature">
          <img
            className="responsive-img feature-img zoom shadow"
            src={placeholder}
            alt="hello"
          />
          <div>
            <p className="alkaline-subtitle">Alkalinity</p>
          </div>
          <div>
            <p className="alkaline-text">
              Many of us lead an acidic lifestyle, from eating a lot meat
              (acidic), drinking carbonated water (highly acidic), experiencing
              negative emotions (stress), and not having enough sleep. This
              unhealthy lifestyle turns our body into an acidic state, where we
              are very susceptible to sickness and diseases. An alkaline
              lifestyle helps restore balance to our bodies and our life.
            </p>
          </div>
        </div>
        <div className="column-centered alkaline-feature">
          <img
            className="responsive-img feature-img zoom shadow"
            src={placeholder}
            alt="hello"
          />
          <div>
            <p className="alkaline-subtitle">Micro-Clustering</p>
          </div>
          <div>
            <p className="alkaline-text">
              The “smaller” your water or rather the less clustered the
              molecules of your drinking water, the better your body will be
              able to absorb it and the more hydrated you will feel. Ionized
              water has better hydration ability due to the micro-clustering of
              the water molecules after the ionization process. Non-ionized
              water molecules are found in clusters of 10 to 20 molecules while
              ionized water are found in clusters of 4 – 6 molecules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alkaline;
