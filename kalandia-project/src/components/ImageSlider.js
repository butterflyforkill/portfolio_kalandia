import React from 'react';

const ImageSlider = () => {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg"
  ];

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`photo-${index}`} className="slider-image" />
      ))}
    </div>
  );
};

export default ImageSlider;
