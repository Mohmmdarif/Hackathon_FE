import React from "react";
import "../../custom_style/custom.css";
import { Card, CardGroup } from "react-bootstrap";

const CardPartnership = ({ image, title, text }) => {
  return (
    <>
      <CardGroup className="h-100">
        <Card className="h-100">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="gotham-medium mb-3">{title}</Card.Title>
            <hr />
            <Card.Text className="fs-6">{text}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default CardPartnership;
