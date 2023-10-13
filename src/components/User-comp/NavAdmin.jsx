import React from "react";
import "../../custom_style/custom.css";
import { Form, FormControl, InputGroup, Row, Col } from "react-bootstrap";
import LogoSearch from "../../assets/img/Search.png";
import LogoMessage from "../../assets/img/Message.png";
import LogoNotification from "../../assets/img/Notification.png";
import Profile from "../../assets/img/profile.jpg";
import TickMark from "../../assets/img/Tickmark.png";
import Mitra from "./Mitra";

const NavAdmin = () => {
  return (
    <div className="bg-light col-md-10 gotham-book">
      <div className="container pt-4">
        <Row>
          <Col sm={3}>
            <Form className="d-flex">
              <InputGroup className="d-flex align-items-center">
                <InputGroup.Text className="bg-white rounded-pill shadow-sm h-75">
                  <img src={LogoSearch} alt="search-logo" />
                  <FormControl
                    type="search"
                    className="me-2 border-0 shadow-none"
                    placeholder="Search"
                  />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Col>
          <Col sm={9} className="d-flex justify-content-end align-items-center">
            <div className="d-flex justify-content-end">
              <div className="me-4 d-flex align-items-center">
                <a href="#/" className="text-decoration-none text-black">
                  <i className="bi bi-bell">
                    <img
                      src={LogoMessage}
                      alt="logo-message"
                      className="shadow-sm"
                    />
                  </i>
                </a>
              </div>
              <div className="me-4 d-flex align-items-center">
                <a href="#/" className="text-decoration-none text-black">
                  <i className="bi bi-bell">
                    <img
                      src={LogoNotification}
                      alt="logo-message"
                      className="shadow-sm"
                    />
                  </i>
                </a>
              </div>
              <div className="profile">
                <div className="d-flex align-items-center">
                  <div>
                    <span
                      class="position-absolute top-1 ms-4 badge rounded-pill bg-color border-2 border-white d-flex align-items-center justify-content-center"
                      style={{ width: "20px" }}
                    >
                      ✔
                    </span>
                    <img
                      src={Profile}
                      alt="profile"
                      className="rounded-circle me-3 shadow-sm"
                      style={{ width: "40px" }}
                    />
                  </div>
                  <img src={TickMark} alt="mark" className="badge" />
                  <div>
                    <h6 className="fs-6 my-auto gotham-medium">Theo James</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mitra">
          <Mitra />
        </div>
      </div>
    </div>
  );
};

export default NavAdmin;
