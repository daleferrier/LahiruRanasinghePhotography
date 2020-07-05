
import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './LandingCarousel.css'
import {carouselImages} from '../data/Images'

class LandingCarousel extends Component {
  static defaultProps = {
    carouselImages,
  };

  render() {
    return (
      <div className="LandingCarousel">
        <Carousel className="carousel" interval={null} indicators={false}>
          {this.props.carouselImages.map((m) => (
            <Carousel.Item className="item" id="item">
              <img
                id="image"
                className=""
                src={require(`../images/${m}`)}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default LandingCarousel;
