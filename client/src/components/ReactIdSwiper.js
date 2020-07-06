import React from "react";
import Swiper from "react-id-swiper";
import "./ReactIdSwiper.css";
import "swiper/css/swiper.css";
import { galleryImages } from "../data/Images";

export default function React_Id_Swiper() {
  return (
    <Swiper>
      {galleryImages.map((m) => (
        <div>
          <img src={require(`../images/gallery/${m}`)} />
          {/* <img src='https://images.unsplash.com/photo-1592358435613-dc0b7a81b5cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/> */}
        </div>
      ))}
      {/* <div>Slide #1</div> */}
    </Swiper>
  );
}
