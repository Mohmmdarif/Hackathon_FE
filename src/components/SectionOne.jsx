import React from "react";
import "../custom_style/custom.css";

const SectionOne = () => {
  return (
    <div className="section-one container-fluid bg-secondary bg-img d-flex justify-content-center align-items-center gotham-book">
      <div className="container text-white">
        <div className="row justify-content-center text-center lh-base">
          <div className="col-md-8">
            <h5 className="fw-normal fs-5">Office & Coworking Space</h5>
            <h1 className="text-50 fw-bolder py-3 gotham-medium">
              Temukan Ruangan untuk{" "}
              <span className="text-color">Setiap Pekerjaan</span>
            </h1>
            <p className="fw-normal fs-5">
              Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan
              kebutuhan Anda, kami akan membantu Anda menemukan ruang kerja yang
              cocok dengan anggaran dan kebutuhan Anda. Segera temukan ruang
              kerja Anda dan tingkatkan produktivitas Anda!
            </p>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="text-black bg-color w-25 p-3 fw-bold border-0 box-shadow btn-hover gotham-medium"
            >
              <a href="#formCustomer" className="underlined-none">
                Book Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
