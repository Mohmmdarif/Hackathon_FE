import React from "react";
import "../custom_style/custom.css";
import { Button, Card } from "react-bootstrap";
import LocationIcon from "../assets/img/LocationIcon.png";
import Office1 from "../assets/img/Office1.png";
import Office2 from "../assets/img/Office2.png";
import Office3 from "../assets/img/Office3.png";

const SectionSix = () => {
  return (
    <div className="container-fluid my-5 gotham-book">
      <div className="container">
        <div className="title">
          <h2 className="fs-1 fw-bold text-center py-4 gotham-medium">
            Select The <span className="text-color">Nearest</span> Space
          </h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card style={{ height: "600px" }} className="hover-shadow-lg">
              <Card.Img variant="top" src={Office1} className="h-50" />
              <Card.Body>
                <Card.Title className="fw-semibold">The 101</Card.Title>
                <div className="row">
                  <div className="col-md-1">
                    <img src={LocationIcon} alt="location_icon" />
                  </div>
                  <div className="col-md-11">
                    <p className="fw-normal">Jakarta Selatan, DKI Jakarta</p>
                  </div>
                </div>
                <div className="container-end d-flex align-content-between flex-wrap">
                  <Card.Text>
                    Komplek Multatuli Indah, Jl. Multatuli No.30-31, Hamdan,
                    Kec. Medan Maimun, 20212
                  </Card.Text>
                  <Button className="w-100 bg-transparent border-1 text-black rounded-0 border-black">
                    <a href="/usecase" className="underlined-none">
                      See Detail
                    </a>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ height: "600px" }} className="hover-shadow-lg">
              <Card.Img variant="top" src={Office2} className="h-50" />
              <Card.Body>
                <Card.Title className="fw-semibold">Clapham</Card.Title>
                <div className="row">
                  <div className="col-md-1">
                    <img src={LocationIcon} alt="location_icon" />
                  </div>
                  <div className="col-md-11">
                    <p className="fw-normal">Medan, Sumatra Utara</p>
                  </div>
                </div>
                <div className="container-end d-flex align-content-between flex-wrap">
                  <Card.Text>
                    Komp. Ruko Centre Point Medan Jl. Timor Blok G No. III/IV
                    2nd Floor, Gang Buntu, Medan Timur, 20231
                  </Card.Text>
                  <Button className="w-100 bg-transparent border-1 text-black rounded-0 border-black">
                    <a href="/usecase" className="underlined-none">
                      See Detail
                    </a>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ height: "600px" }} className="hover-shadow-lg">
              <Card.Img variant="top" src={Office3} className="h-50" />
              <Card.Body>
                <Card.Title className="fw-semibold">Spasi</Card.Title>
                <div className="row">
                  <div className="col-md-1">
                    <img src={LocationIcon} alt="location_icon" />
                  </div>
                  <div className="col-md-11">
                    <p className="fw-normal">Medan, Sumatra Utara</p>
                  </div>
                </div>
                <div className="container-end d-flex align-content-between flex-wrap">
                  <Card.Text>
                    Komplek Multatuli Indah, Jl. Multatuli No.30-31, Hamdan,
                    Kec. Medan Maimun, 20212
                  </Card.Text>
                  <Button className="w-100 bg-transparent border-1 text-black rounded-0 border-black">
                    <a href="/usecase" className="underlined-none">
                      See Detail
                    </a>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="text-black bg-transparent border-1 text-black rounded-0 border-black p-3"
          >
            Browse All Locations
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
