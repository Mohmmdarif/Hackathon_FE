import React from "react";
import "../custom_style/custom.css";
import { Tab, Tabs } from "react-bootstrap";
import SectionThreeimg from "../assets/img/SectionThree.png";
import SectionThreeimg2 from "../assets/img/SectionThree_1.png";
import { useNavigate } from "react-router-dom";

const SectionThree = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5 gotham-book">
      <Tabs
        defaultActiveKey="customer"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        {/* 
        
          Tab customer
        
        */}
        <Tab eventKey="customer" title="as Customer">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-6">
                <img src={SectionThreeimg} alt="customer_Office" width={500} />
              </div>
              <div className="col-md-6 d-flex flex-column align-self-start justify-content-center gap-3">
                <h2 className="w-100 fw-bold gotham-medium">
                  Space Terbaik untuk Semua Tim dan Pekerjaan Anda
                </h2>
                <p className="fw-normal fs-5">
                  Dengan berbagai pilihan ruangan yang dapat disesuaikan dengan
                  kebutuhan Anda, kami akan membantu Anda mencari ruangan kerja
                  yang sesuai dengan anggaran dan kebutuhan Anda. Temukan
                  ruangan kerja Anda sekarang dan tingkatkan produktivitas kerja
                  Anda!
                </p>
                <button
                  className="bg-color border-0 fw-semibold p-2 w-50 box-shadow gotham-medium"
                  type="submit"
                >
                  <a href="#formCustomer" className="underlined-none">
                    Book Now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Tab>

        {/* 
        
          Tab Building Owner
        
        */}
        <Tab eventKey="owner" title="as Building Owner">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-6">
                <img src={SectionThreeimg2} alt="customer_Office" width={500} />
              </div>
              <div className="col-md-6 d-flex flex-column align-self-start justify-content-center gap-4">
                <h2 className="w-100 fw-bold gotham-medium">
                  Tingkatkan Tenants Office Tower bersama Kami
                </h2>
                <p className="fs-5">
                  Tidak ada lagi lantai dan ruang kosong di office tower Anda
                  dengan solusi strategi marketing yang tepat. Dengan
                  menggunakan digital marketing berbasis data yang efektif,
                  Workfrom siap memberikan hasil nyata bagi Anda.
                </p>
                <button
                  className="bg-color border-0 fw-semibold p-2 w-50 box-shadow gotham-medium"
                  type="submit"
                  onClick={() => navigate("/partnership")}
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SectionThree;
