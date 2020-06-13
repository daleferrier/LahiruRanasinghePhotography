import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import "./DesktopTestimonials.css";
import Paper from "@material-ui/core/Paper";

// import Container from "@material-ui/core/Container";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import TestimonialPic from "../../images/couple.jpg";
import "./DesktopTestimonials.css";
import { testimonials } from "../../data/testimonials";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

function Testimonial() {
  return (
    <div className="DesktopTestimonials">
      <Carousel interval={null} wrap={true} fade={false} indicators={false}>
        {testimonials.map((m) => (
          <Carousel.Item style={{ padding: 50 }}>
            <Container
              className="DesktopTestimonials-container"
              style={{ padding: "0px 15px" }}
            >
              <Row className="align-items-center">
                <Col lg="8" className="mx-0 px-0">
                  <img
                    src={require(`../../images/${m.photo}`)}
                    className="DesktopTestimonials-image"
                  />
                </Col>

                <Col lg="4" className="">
                  <h3>{m.name}</h3>
                  <div className="DesktopTestimonials-quote1">
                    <FormatQuoteRoundedIcon className="DesktopTestimonials-quote" />
                  </div>

                  {m.testimonial}

                  <div className="DesktopTestimonials-quote2">
                    <FormatQuoteRoundedIcon className="DesktopTestimonials-quote" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default function DesktopTestimonials() {
  return (
    <Desktop>
      <Testimonial />
    </Desktop>
  );
}
