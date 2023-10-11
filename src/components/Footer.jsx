import React from "react";
import "../custom_style/custom.css";
import LogoWorkFromFooter from "../assets/img/LogoWorkFromFooter.png";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-white gotham-book"
      style={{ marginTop: "5rem", marginBottom: "5rem" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <img src={LogoWorkFromFooter} alt="logoWorkFrom" />
            <p className="w-75 fs-6 fw-normal mt-4">
              Komp. Ruko Centre Point Medan Jalan Timor Blok G No. III/IV 2nd
              Floor, Gang Buntu, Medan Timur, Medan City, North Sumatra 20231
            </p>
            <p className="w-50 fs-6 fw-normal mt-4">(+6261) 805 109 77</p>
          </div>
          <div className="col-md-2 mt-5">
            <h5 className="fw-semibold fs-6 gotham-medium">LOCATIONS</h5>
            <ul className="list-unstyled fs-6">
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Clapham
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  The 101
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Yafurni
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Kalingga
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Spasi
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mt-5">
            <h5 className="fw-semibold fs-6 gotham-medium">USE CASE</h5>
            <ul className="list-unstyled fs-6">
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Event
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Meeting
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  PhotoShoot
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Office
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mt-5">
            <h5 className="fw-semibold fs-6 gotham-medium">COMPANY</h5>
            <ul className="list-unstyled fs-6">
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Contact Us
                </a>
              </li>
              <li className="my-2">
                <a href="#/" className="underlined-none">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
