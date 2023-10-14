import React, { useState } from "react";
import "../custom_style/custom.css";
import { Button, Col, Form, Row, Card } from "react-bootstrap";

const SectionSeven = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsappNumber: "",
    email: "",
    company: "",
    bookPlan: "Choose...",
    building: "Choose...",
    pax: "Choose...",
    preparedContactBy: "Choose...",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Data is valid, submit the form
      // You can place your form submission logic here
      console.log("Form data is valid:", formData);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Full Name is required";
    }
    if (!data.whatsappNumber.trim()) {
      errors.whatsappNumber = "Whatsapp Number is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    }
    if (!data.company.trim()) {
      errors.company = "Company is required";
    }
    if (data.bookPlan === "Choose...") {
      errors.bookPlan = "Please select a Book Plan";
    }
    if (data.building === "Choose...") {
      errors.building = "Please select a Building";
    }
    if (data.pax === "Choose...") {
      errors.pax = "Please select the number of people";
    }
    if (data.preparedContactBy === "Choose...") {
      errors.preparedContactBy = "Please select a Preferred Contact Method";
    }
    return errors;
  };

  return (
    <div className="container-fluid gotham-book">
      <div className="container" id="formCustomer">
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
          <Form className="pt-2" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name}</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWhatsappNumber">
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                />
                {errors.whatsappNumber && (
                  <span className="text-danger">{errors.whatsappNumber}</span>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                {errors.company && (
                  <span className="text-danger">{errors.company}</span>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridBookPlan">
                <Form.Label>Book Plan</Form.Label>
                <Form.Select
                  name="bookPlan"
                  value={formData.bookPlan}
                  onChange={handleChange}
                >
                  <option value="Choose...">Choose...</option>
                  <option value="Private Office">Private Office</option>
                  <option value="Daily Pass">Daily Pass</option>
                  <option value="Flexible Desk">Flexible Desk</option>
                  <option value="Dedicated Desk">Dedicated Desk</option>
                  <option value="Event Space">Event Space</option>
                  <option value="Meeting Room">Meeting Room</option>
                </Form.Select>
                {errors.bookPlan && (
                  <span className="text-danger">{errors.bookPlan}</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridBuilding">
                <Form.Label>Building</Form.Label>
                <Form.Select
                  name="building"
                  value={formData.building}
                  onChange={handleChange}
                >
                  <option value="Choose...">Choose...</option>
                  <option value="Clapham">Clapham</option>
                  <option value="Yafurni">Yafurni</option>
                </Form.Select>
                {errors.building && (
                  <span className="text-danger">{errors.building}</span>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPax">
                <Form.Label>Pax (Number Of People)</Form.Label>
                <Form.Select
                  name="pax"
                  value={formData.pax}
                  onChange={handleChange}
                >
                  <option value="Choose...">Choose...</option>
                  <option value="1 - 10">1 - 10</option>
                  <option value="11 - 20">11 - 20</option>
                  <option value="21 - 30">21 - 30</option>
                  <option value="31 - 40">31 - 40</option>
                  <option value="41 - 50">41 - 50</option>
                  <option value="50+">50+</option>
                </Form.Select>
                {errors.pax && (
                  <span className="text-danger">{errors.pax}</span>
                )}
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPreparedContactBy">
                <Form.Label>Prepared Contact By</Form.Label>
                <Form.Select
                  name="preparedContactBy"
                  value={formData.preparedContactBy}
                  onChange={handleChange}
                >
                  <option value="Choose...">Choose...</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="Email">Email</option>
                </Form.Select>
                {errors.preparedContactBy && (
                  <span className="text-danger">
                    {errors.preparedContactBy}
                  </span>
                )}
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
