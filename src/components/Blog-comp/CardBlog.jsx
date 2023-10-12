import React from "react";
import "../../custom_style/custom.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeaderBlog = ({ imgURL, titleBlog, penulis, content }) => {
  return (
    <>
      <Card style={{ height: "auto" }} className="hover-shadow-lg mb-4">
        <Card.Img variant="top" src={imgURL} />
        <Card.Body className="p-4 d-flex flex-column">
          <div>
            <Card.Title className="fw-semibold fs-3 gotham-medium">
              {titleBlog}
            </Card.Title>
          </div>
          <div>
            <Card.Text>{penulis}</Card.Text>
            <Card.Text className="fs-6">{content}</Card.Text>
          </div>
          <div className="mt-3 h-100 d-flex flex-wrap align-content-end">
            <Link to="/blog-utama">
              <Button variant="primary">Read More</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default HeaderBlog;
