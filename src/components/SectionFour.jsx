import React from "react";
import "../custom_style/custom.css";
import Partnerimg from "../assets/img/Partner1.png";
import Partnerimg2 from "../assets/img/Partner2.png";
import Partnerimg3 from "../assets/img/Partner3.png";
import Partnerimg4 from "../assets/img/Partner4.png";

const SectionFour = () => {
  return (
    <div className="continer-fluid my-5">
      <div className="container">
        <div className="title">
          <h2 className="text-center py-3 fw-bold gotham-medium">
            Our Partners
          </h2>
        </div>
        <div className="row my-4">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <img src={Partnerimg} alt="partner1" />
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <img src={Partnerimg2} alt="partner2" />
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <img src={Partnerimg3} alt="partner3" />
          </div>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <img src={Partnerimg4} alt="partner4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
