import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickGalleryCarousel.css'
import {galleryImages} from '../data/Images'


export default function SlickGalleryCarousel(props){
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      // dots: true,
      // adaptiveHeight: true,
    };
    return (
      <div className="SlickGalleryCarousel">
        <Slider
          {...settings}
          initialSlide={props.index}
          className="SlickGalleryCarousel-slider"
        >
          {galleryImages.map((m) => (
            <div>
              <img src={require(`../images/gallery/${m}`)} />
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
