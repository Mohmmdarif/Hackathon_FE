import React from "react";
import "../../custom_style/custom.css";
import { Button, Col, Form, Row, Card, FloatingLabel } from "react-bootstrap";
import IconUpload from "../../assets/img/prime_upload.png";

const Content4 = () => {
  return (
    <>
      <div className="container-fluid gotham-book">
        <div className="container" id="formCollaboration">
          <Card className="p-5 shadow-sm">
            <Card.Title className="fw-semibold fs-1 text-center gotham-medium">
              Let's talk about <span className="text-color">Collaboration</span>
            </Card.Title>
            <Card.Body>
              <Card.Text className="text-center fs-6">
                Fill in the form below with your details, and we'll have a team
                member contact you.
              </Card.Text>
            </Card.Body>
            <Form className="pt-2">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridWhatsappNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Phone Number" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridWhatsappNumber">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="tel" placeholder="Company Name" />
                </Form.Group>
              </Row>
              <Form>
                <Form.Label className="text-muted">
                  Select Use Case :
                </Form.Label>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Events"
                      name="events"
                      type={type}
                      id={`inline-${type}-1`}
                      className="mb-3 me-5"
                    />
                    <Form.Check
                      inline
                      label="Meeting"
                      name="meeting"
                      type={type}
                      id={`inline-${type}-2`}
                      className="ms-2"
                    />
                    <div>
                      <Form.Check
                        inline
                        label="Photoshoot"
                        name="photoshoot"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Office"
                        name="office"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                    </div>
                  </div>
                ))}
              </Form>
              <Form>
                <FloatingLabel controlId="floatingTextarea2" label="Messages">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form>
              <Form className="d-flex align-items-stretch">
                <div className="input-group mt-4 d-flex align-items-stretch">
                  <img src={IconUpload} alt="icon-upload" height={30} />
                  <input
                    type="file"
                    name="upload"
                    title=""
                    id="upload"
                    className="ms-n1"
                  />
                </div>
                <Button className="mt-4 px-3 bg-black w-50" type="submit">
                  Submit
                </Button>
              </Form>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Content4;
