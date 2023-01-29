import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import night from "../assets/night.jpg";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="Service" btnClass="hide" />
    </>
  );
};

export default Service;
