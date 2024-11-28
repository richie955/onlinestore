import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const images = [
    "calma.jpg", // Replace with your image URLs
    "belli.jpg",
    "messi.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Automatically change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="hero-content">
        <div className=" text-center py-16 px-4 flex flex-col items-center justify-center">
          {/* Discount Banner */}
          <a
            href="/collections/classics"
            className="bg-black opacity-80 text-white border-white border-[1px] pl-4 py-[2px] rounded-full text-sm mb-4 flex items-center justify-center gap-2  max-w-md"
          >
            Classics Now 25% Off!{" "}
            <span className="ml-1 w-7 h-7 mr-[7px] my-1 flex items-center justify-center bg-white text-black rounded-full text-xl hover:bg-gray-200 transition"></span>
          </a>

          {/* Main Headline */}
          <h1 className="text-6xl font-bold mb-4">Game Day Starts Here.</h1>
          <p className="text-lg text-white mb-6">Jerseys for Every Occasion</p>

          {/* Supporting Text */}
          <p className="text-sm text-white max-w-2xl mb-8">
            Discover premium jerseys crafted with the finest materials to
            deliver unmatched comfort and durability. Our pricing ranges fit
            every budget, ensuring everyone can gear up in style.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href="/shop"
              className="bg-black text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Shop Now
            </a>
            <a
              href="/explore"
              className="bg-gray-200 text-black px-6 py-2 rounded-lg text-sm hover:bg-gray-300 transition"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
