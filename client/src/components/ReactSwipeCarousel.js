import React from "react";
import ReactSwipe from "react-swipe";
import { galleryImages } from "../data/Images";
import './ReactSwipeCarousel.css'

export default function ReactSwipeCarousel (props) {
  let reactSwipeEl;

  return (
    // <div className="">
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
      {/* <div>
          <img src="https://images.unsplash.com/photo-1537301696988-4a82a4959466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1429892494097-cccc61109f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1593053138039-c8cdd703700e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div> */}
    </ReactSwipe>
    // </div>
  );
};
