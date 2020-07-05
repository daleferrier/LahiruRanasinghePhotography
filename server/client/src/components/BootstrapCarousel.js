
import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './BootstrapCarousel.css'
import {galleryImages} from '../data/Images'


export default function BootstrapCarousel(props){
  return (
    <div className="BootstrapCarousel">
      <Carousel
        defaultActiveIndex={props.index}
        interval={null}
        indicators={false}
        fade={false}
        className='BootstrapCarousel-carousel'
      >
        {galleryImages.map((m) => (
          <Carousel.Item
            className="BootstrapCarousel-item"
            id="BootstrapCarousel-item"
          >
            <img
              id="BootstrapCarousel-image"
              className="BootstrapCarousel-image"
              src={require(`../images/${m}`)}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

// class LandingCarousel extends Component {
//   static defaultProps = {
//     galleryImages,
//   };

//   render() {

//     return (
//       <div className="BootstrapCarousel">
//         <Carousel interval={null} indicators={false}>
//           {this.props.galleryImages.map((m) => (
//             <Carousel.Item className="item" id="item">
//               <img
//                 id="image"
//                 className=""
//                 src={require(`../images/${m}`)}
//               />
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     );
//   }
// }

// export default LandingCarousel;
