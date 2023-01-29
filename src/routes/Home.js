import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img12 from "../assets/12.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img12}
        title="Your Journey Your Story"
        text="Choose Your Favorite Deatination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
};

export default Home;
