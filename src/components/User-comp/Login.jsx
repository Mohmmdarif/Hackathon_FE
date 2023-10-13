import React from "react";
import "../../custom_style/custom.css";
import { Card, Form, FloatingLabel } from "react-bootstrap";
import image from "../../assets/img/Rectangle65.png";
import LogoWorkFrom from "../../LogoWorkfrom.png";

const Login = () => {
  return (
    <div className="container-fluid mvh-100 gotham-book d-flex justify-content-center align-items-center">
      <div className="container" style={{ width: "60%" }}>
        <Card className="card">
          <Card.Body>
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <img src={image} alt="image_" className="img-fluid" />
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
                      Login to Your Account
                    </h3>
                    <div className="form-group w-75 d-flex flex-column mx-auto">
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
                        controlId="floatingPassword"
                        label="Password"
                      >
                        <Form.Control type="password" placeholder="Password" />
                      </FloatingLabel>
                    </div>
                    <div className="form-group form-check my-3 ms-5">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                    <div className="d-flex flex-column">
                      <button
                        type="submit"
                        className="btn bg-black text-white w-75 mx-auto gotham-medium fw-bold"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-3">
                    <a href="/login" className="text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center mt-3">
                    <p>
                      Don't have an account?{" "}
                      <a href="/register" className="text-decoration-none">
                        Sign Up
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

export default Login;
