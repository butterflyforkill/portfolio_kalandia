import React from "react";

const ImageSlider = ({ images, containerClass, imageClass }) => {
  return (
    <div className={`image-slider ${containerClass || ""}`}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.alt || `photo-${index}`}
          className={`slider-image ${imageClass || ""}`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
