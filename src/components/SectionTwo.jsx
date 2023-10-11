import React from "react";
import "../custom_style/custom.css";
import SectionOneOffice from "../assets/img/SectionOneOffice.png";

const SectionTwo = () => {
  return (
    <div className="bg-black">
      <img
        src={SectionOneOffice}
        alt="office-img"
        className="img-fluid mt-lg-5"
      />
    </div>
  );
};

export default SectionTwo;
