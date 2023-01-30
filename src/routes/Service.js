import React from "react";

import Hero from "../components/Hero";

import night from "../assets/10.jpg";
import Trips from "../components/Trips";

const Service = () => {
  return (
    <>
      <Hero cName="hero-mid" heroImg={night} title="Service" btnClass="hide" />
      <Trips />
    </>
  );
};

export default Service;
