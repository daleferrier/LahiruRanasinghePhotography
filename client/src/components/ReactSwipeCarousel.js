import React, {useState} from "react";
import ReactSwipe from "react-swipe";
import { galleryImages } from "../data/Images";
import './ReactSwipeCarousel.css'

export default function ReactSwipeCarousel (props) {
  let reactSwipeEl;
  const total = galleryImages.length;
  var slide = 0

  // function slideChange(index){
  //   setSlide(index)
  // }

  return (
    // <div className="">

    <div>
      {/* <div style={{ background: "red" }}>
        {slide}/{total}
      </div> */}
      <ReactSwipe
        className="ReactSwipeCarousel"
        swipeOptions={{
          startSlide: props.index,
          continuous: true,
        }}
        ref={(el) => (reactSwipeEl = el)}
      >
        {galleryImages.map((m) => (
          <div>
            <img src={require(`../images/gallery/${m}`)} />
            {/* <img src='https://images.unsplash.com/photo-1592358435613-dc0b7a81b5cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/> */}
          </div>
        ))}
      </ReactSwipe>
    </div>
    // </div>
  );
};
