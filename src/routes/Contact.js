import React from "react";

import Hero from "../components/Hero";

import night from "../assets/2.jpg";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Hero cName="hero-mid" heroImg={night} title="Contact" btnClass="hide" />
      <ContactForm />
    </>
  );
};

export default Contact;
