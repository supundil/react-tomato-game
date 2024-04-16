// In your components/ImageSlider.js file

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ images }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="max-w-3xl mx-auto"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
