import React from "react";
import "../custom_style/custom.css";
import { Button, Col, Form, Row, Card } from "react-bootstrap";

const SectionSeven = () => {
  return (
    <div className="container-fluid gotham-book">
      <div className="container">
        <Card className="p-5 shadow-sm">
          <Card.Title className="fw-semibold fs-1 text-center gotham-medium">
            Book a Room Now
          </Card.Title>
          <Card.Body>
            <Card.Text className="text-center fs-6">
              Fill in your contacts details, and our representatives will get
              back to you!
            </Card.Text>
          </Card.Body>
          <hr />
          <Form className="pt-2">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWhatsappNumber">
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control type="tel" placeholder="Phone Number" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWhatsappNumber">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="tel" placeholder="Company" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Private Office</option>
                  <option>Daily Pass</option>
                  <option>Flexible Desk</option>
                  <option>Dedicated Desk</option>
                  <option>Event Space</option>
                  <option>Meeting Room</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBuilding">
                <Form.Label>Building</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Clapham</option>
                  <option>Yafurni</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPax">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>1 - 10</option>
                  <option>11 - 20</option>
                  <option>21 - 30</option>
                  <option>31 - 40</option>
                  <option>41 - 50</option>
                  <option>50+</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPreparedContactBy">
                <Form.Label>Prepared Contact By</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Whatsapp</option>
                  <option>Email</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button className="mt-4 px-3" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default SectionSeven;
