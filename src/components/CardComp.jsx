import React from "react";
import "../custom_style/custom.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BuildingIcon from "../assets/img/icon-park-outline_building-one.png";
import LocationIcon from "../assets/img/ei_location.png";
import PersonIcon from "../assets/img/clarity_group-line.png";
import PriceTagIcon from "../assets/img/et_pricetags.png";
import TagIcon from "../assets/img/ph_tag-thin.png";
import { Badge, Stack } from "react-bootstrap";

const CardComp = (props) => {
  return (
    <>
      <Card className="d-flex flex-row">
        <Card.Img variant="left" src={props.image} width={306} />
        <Card.Body>
          <Card.Title className="gotham-medium mb-3">{props.title}</Card.Title>
          <div className="building d-flex gap-2 my-2">
            <img src={BuildingIcon} alt="building-icon" />
            <Card.Text className="fs-6">{props.building}</Card.Text>
          </div>
          <div className="location d-flex gap-2 my-2">
            <div>
              <img src={LocationIcon} alt="location-icon" />
            </div>
            <Card.Text className="fs-6">{props.location}</Card.Text>
          </div>
          <div className="person d-flex gap-2 my-2">
            <div>
              <img src={PersonIcon} alt="person-icon" />
            </div>
            <Card.Text className="fs-6">{props.person}</Card.Text>
          </div>
          <div className="price-tag d-flex gap-2 my-2">
            <div>
              <img src={PriceTagIcon} alt="price-tag-icon" />
            </div>
            <Card.Text>{props.price}</Card.Text>
          </div>
          <div className="d-flex justify-content-center my-2">
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark" className="p-2 px-5">
                Event
              </Badge>
            </Stack>
          </div>
          <div className="tags d-flex gap-2">
            <div>
              <img src={TagIcon} alt="tag-icon" />
            </div>
            <Card.Text>Tags</Card.Text>
          </div>
          <div className="badge my-2">
            <Stack direction="horizontal" gap={2}>
              <Badge bg="dark" className="p-2">
                Workshop
              </Badge>
              <Badge bg="dark" className="p-2">
                Training
              </Badge>
              <Badge bg="dark" className="p-2">
                Classroom
              </Badge>
              <Badge bg="dark" className="p-2">
                Seminar
              </Badge>
              <Badge bg="dark" className="p-2">
                Presentation
              </Badge>
            </Stack>
          </div>
          <div className="button">
            <Button className="w-100 bg-transparent text-black border-black">
              <a
                href="https://api.whatsapp.com/send/?phone=086180510977&text&type=phone_number&app_absent=0"
                className="underlined-none"
              >
                Contact Us
              </a>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComp;
