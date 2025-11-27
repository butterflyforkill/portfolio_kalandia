import React, { useEffect, useRef } from "react";

const ImageSlider = ({ images, containerClass = "", imageClass = "" }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Only enable auto-scroll on mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed (pixels per frame)
    const interval = setInterval(() => {
      if (slider) {
        scrollAmount += scrollSpeed;
        slider.scrollLeft = scrollAmount;

        // Reset when reaching the end (loop)
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
          scrollAmount = 0;
        }
      }
    }, 20); // Smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={sliderRef}
      className={`image-slider ${containerClass || ""} ${
        typeof window !== "undefined" && window.innerWidth < 768
          ? "mobile-auto-scroll"
          : "desktop-grid"
      }`}
    >
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
