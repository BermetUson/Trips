import React from "react";

import "./Dectination.css";

const DectinationData = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>

        <div className="image">
          <img src={props.img1} alt="Taal" />
          <img src={props.img2} alt="Taal" />
        </div>
      </div>
    </>
  );
};

export default DectinationData;
