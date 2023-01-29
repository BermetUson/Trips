import React from "react";
import "./Dectination.css";

import taal1 from "../assets/1.jpg";
import taal2 from "../assets/2.jpg";

const Dectination = () => {
  return (
    <div className="dectination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and you’ll see
            the peculiar environment found on an active volcano, including
            volcanic rocks and steam vents. The hike can be dusty and hot, so
            plan for an early morning trip, and then unwind with some bulalo
            before heading back home!
          </p>
        </div>

        <div className="image">
          <img src={taal1} alt="Taal" />
          <img src={taal2} alt="Taal" />
        </div>
      </div>
    </div>
  );
};

export default Dectination;
