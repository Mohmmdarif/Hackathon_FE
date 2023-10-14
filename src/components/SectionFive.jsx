import React from "react";
import "../custom_style/custom.css";
import Accordion from "react-bootstrap/Accordion";
import SectionFiveOffice from "../assets/img/SectionFiveOffice.png";

const SectionFive = () => {
  return (
    <div className="container-fluid bg-black gotham-book">
      <div className="container pt-2">
        <div className="title">
          <h2 className="fs-1 fw-bold text-white text-center py-5 my-5 gotham-medium">
            Customize with <span className="text-color">Needs</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <Accordion defaultActiveKey="0" flush className="w-75">
              <Accordion.Item eventKey="0" className="bg-black text-white">
                <Accordion.Header className="gotham-medium">
                  Event
                </Accordion.Header>
                <Accordion.Body>
                  Rayakan perayaan dan acara terbaik dengan tempat pilihan
                  terbaik dan akses lebih mudah.
                  <div>
                    <button
                      className="bg-color border-0 fw-semibold p-2 w-50 box-shadow mt-3"
                      type="submit"
                    >
                      <a href="#formCustomer" className="underlined-none">
                        Book Now
                      </a>
                    </button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="bg-black text-white">
                <Accordion.Header className="gotham-medium">
                  Meeting
                </Accordion.Header>
                <Accordion.Body>
                  Ruang rapat nyaman, menciptakan suasana ideal untuk pertemuan
                  bisnis yang efektif dan produktif.
                  <div>
                    <button
                      className="bg-color border-0 fw-semibold p-2 w-50 box-shadow mt-3"
                      type="submit"
                    >
                      <a href="#formCustomer" className="underlined-none">
                        Book Now
                      </a>
                    </button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="bg-black text-white">
                <Accordion.Header className="gotham-medium">
                  Photo Shoot
                </Accordion.Header>
                <Accordion.Body>
                  Ruang foto dengan design profesional, memberikan pengalaman
                  berkesan untuk sesi pemotretan.
                  <div>
                    <button
                      className="bg-color border-0 fw-semibold p-2 w-50 box-shadow mt-3"
                      type="submit"
                    >
                      <a href="#formCustomer" className="underlined-none">
                        Book Now
                      </a>
                    </button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="bg-black text-white">
                <Accordion.Header className="gotham-medium">
                  Video Shot
                </Accordion.Header>
                <Accordion.Body>
                  Ruang video shoot lengkap untuk menciptakan hasil video yang
                  memukau dan profesional.
                  <div>
                    <button
                      className="bg-color border-0 fw-semibold p-2 w-50 box-shadow mt-3"
                      type="submit"
                    >
                      <a href="#formCustomer" className="underlined-none">
                        Book Now
                      </a>
                    </button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-md-6 pb-4 mb-5">
            <img src={SectionFiveOffice} alt="grid_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
