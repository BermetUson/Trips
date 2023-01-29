import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import night from "../assets/night.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="About" btnClass="hide" />
    </>
  );
};

export default About;
