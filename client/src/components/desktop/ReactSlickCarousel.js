import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReactSlickCarousel.css'
import {carouselImages} from '../../data/Images'
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function ReactSlickCarousel(){

  const matches = useMediaQuery('(min-width: 920px)')
  const speed = useMediaQuery('(min-width: 920px)')
  const SpeedValue = speed? 500:200

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      // lazyLoad: true,
      focusOnSelect: true,
      speed: SpeedValue,
      // speed: 200,
      // speed: 2000,
      // autoplay: true,
      // autoplaySpeed: 0,
      // autoplaySpeed: 1000,
      cssEase: "cubic-bezier(0.5, 1, 0.89, 1)",
      // cssEase: "linear",
      
      pauseOnHover: true,
      arrows: matches,
      // arrows: false,
      swipeToSlide: true,

      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // initialSlide: 2,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="ReactSlickCarousel">
        <Slider {...settings}>
          {carouselImages.map((m) => (
            <div>
              <img src={require(`../../images/carousel/${m}`)}/>
              {/* <img src='https://images.unsplash.com/photo-1592358435613-dc0b7a81b5cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/> */}
            </div>
          ))}
          {/* <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    );
}
