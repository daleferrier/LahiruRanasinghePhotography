import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Item from 'react-bootstrap/CarouselItem';
import './LandingCarousel.css'
import {Images} from '../data/Images'


class LandingCarousel extends Component {
  static defaultProps = {
    Images,
  };

  render() {
    return (
      <div className="LandingCarousel">
        <Carousel className="carousel" interval={null} indicators={false}>
          {this.props.Images.map((m) => (
            <Carousel.Item className = 'item' id='item'>
              <img id='image' className="" src={m}/>
              {/* <img className="d-block w-100" src={m} alt="First slide" mx-auto my-auto/> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    ); 
  }
}

export default LandingCarousel;