import React from "react";
import "../../custom_style/custom.css";
import { Card, Form, FloatingLabel } from "react-bootstrap";
import image from "../../assets/img/Rectangle65.png";
import LogoWorkFrom from "../../LogoWorkfrom.png";

const Register = () => {
  return (
    <div className="container-fluid mvh-100 gotham-book d-flex justify-content-center align-items-center">
      <div className="container" style={{ width: "60%" }}>
        <Card className="card">
          <Card.Body>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={image}
                  alt="image_"
                  className="img-thumbnail h-100 border-0"
                />
              </div>
              <div className="col-md-6">
                <div className="brand pb-4">
                  <img
                    src={LogoWorkFrom}
                    alt="logo"
                    className="img-fluid mx-auto d-flex pb-2"
                  />
                </div>
                <div className="form">
                  <form>
                    <h3 className="fs-4 text-center gotham-medium mb-3">
                      Create Your Account
                    </h3>
                    <div className="form-group w-75 d-flex flex-column mx-auto">
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Full Name"
                        className="mb-3 h-25"
                      >
                        <Form.Control type="text" placeholder="john doe" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                        />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Phone Number"
                        className="mb-3"
                      >
                        <Form.Control type="text" placeholder="999-9999-9999" />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                      >
                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <button
                        type="submit"
                        className="btn bg-black text-white w-75 mx-auto gotham-medium fw-bold"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-3">
                    <p>
                      Have an account?{" "}
                      <a href="/login" className="text-decoration-none">
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;
