import React from "react";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-caontainer">
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Massage" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
