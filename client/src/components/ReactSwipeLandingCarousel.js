import React, {useState} from "react";
import ReactSwipe from "react-swipe";
import { carouselImages } from "../data/Images";
import './ReactSwipeLandingCarousel.css'

export default function ReactSwipeCarousel (props) {
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className="ReactSwipeLandingCarousel"
        swipeOptions={{
          // startSlide: props.index,
          continuous: true,
          auto: 1000,
          speed: 5000,
          widthOfSiblingSlidePreview: 50,
        }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {carouselImages.map((m) => (
          <div>
            <img src={require(`../images/carousel/${m}`)} />
            {/* <img src='https://images.unsplash.com/photo-1592358435613-dc0b7a81b5cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/> */}
          </div>
        ))}
      </ReactSwipe>
    </div>
  );
};
