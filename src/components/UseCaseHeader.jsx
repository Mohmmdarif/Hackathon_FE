import React from "react";
import "../custom_style/custom.css";
import { Col, Form, Row, Breadcrumb } from "react-bootstrap";

const UseCaseHeader = () => {
  return (
    <div className="container-fluid gotham-book py-5">
      <div className="container">
        <div className="header">
          <h1 className="gotham-medium fw-bold">Use Case</h1>
        </div>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="underlined-none">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>UseCase</Breadcrumb.Item>
        </Breadcrumb>
        <Form className="pt-2">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUseCase">
              <Form.Label className="gotham-medium">Use Case</Form.Label>
              <Form.Select defaultValue="Choose Here..." className="shadow-sm">
                <option>Choose Here...</option>
                <option>Event</option>
                <option>Meeting</option>
                <option>Photo Shoot</option>
                <option>Office</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLocation">
              <Form.Label className="gotham-medium">Location</Form.Label>
              <Form.Select defaultValue="Choose Here..." className="shadow-sm">
                <option>Choose Here...</option>
                <option>None</option>
                <option>Medan (9)</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCapacityRange">
              <Form.Label className="gotham-medium">Capacity Range</Form.Label>
              <div className="d-flex flex-row gap-2">
                <Form.Control
                  type="text"
                  placeholder="Min"
                  className="text-center shadow-sm"
                />
                _
                <Form.Control
                  type="text"
                  placeholder="Max"
                  className="text-center shadow-sm"
                />
              </div>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPriceRange">
              <Form.Label className="gotham-medium">Price Range</Form.Label>
              <div className="d-flex flex-row gap-2">
                <Form.Control
                  type="text"
                  placeholder="Min"
                  className="text-center shadow-sm"
                />
                _
                <Form.Control
                  type="text"
                  placeholder="Max"
                  className="text-center shadow-sm"
                />
              </div>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <hr />
    </div>
  );
};

export default UseCaseHeader;
