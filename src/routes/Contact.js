import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import night from "../assets/2.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="Contact" btnClass="hide" />
    </>
  );
};

export default Contact;
