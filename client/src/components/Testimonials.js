import React from "react";
import "./Testimonials.css";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";
import Container from "@material-ui/core/Container";
import { headers } from "../data/headers";
import PageHeader from "./PageHeader";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../data/testimonials";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
});

function ReactSlickTestimonials() {
  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "10px",
    slidesToShow: 3,
    // lazyLoad: true,
    // focusOnSelect: true,
    speed: 100,
    // speed: 2000,
    // autoplay: true,
    // autoplaySpeed: 0,
    // autoplaySpeed: 1000,
    cssEase: "cubic-bezier(0.5, 1, 0.89, 1)",
    // pauseOnHover: true,
    arrows: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Testimonials">
      <Slider {...settings}>
        {testimonials.map((m) => (
          <div>
            <Paper elevation={2} style={{ display: "block", height: "100%", width: "100%", margin: '0px', padding: 10 }}>
              <blockquote className='writing'>{m.testimonial}</blockquote>
              <footer>{m.name}</footer>
            </Paper>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default function Testimonials(props) {
  return (
    <div>
      <PageHeader header={headers.Testimonials} />
      <ReactSlickTestimonials />
    </div>
  );
}
