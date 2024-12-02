import React, { useState, useEffect } from "react";
import "./Hero.css";
import useFetch from "../hooks/useFetch";

const Hero = () => {
  const images = [
    "calma.jpg", // Replace with your image URLs
    "belli.jpg",
    "messi.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Automatically change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const [currentImage, setCurrentImage] = useState(0);

  const { loading, error, data } = useFetch(
    "https://store-theta-lyart.vercel.app/api/hero-section?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const heroData = data?.data;

  const bgImages = data?.data?.BackgroundImages?.map((img) => ({
    id: img.id,
    name: img.name,
    url: `http://localhost:1337${img.url}`, // Construct the full URL
  }));

 

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${images[currentImage]})`,}}>
      <div className="hero-content">
        <div className=" text-center py-16 px-4 flex flex-col items-center justify-center">
          <a
            href="/classics"
            className="bg-black opacity-80 text-white border-white border-[1px] pl-4 py-[2px] rounded-full text-sm mb-4 flex items-center justify-center gap-2  max-w-md"
          >
           {heroData?.Offer}
            <span className="ml-1 w-7 h-7 mr-[7px] my-1 flex items-center justify-center bg-white text-black rounded-full text-xl hover:bg-gray-200 transition"></span>
          </a>

          <h1 className="text-6xl font-bold mb-4">{heroData?.MainText}</h1>
          <p className="text-lg text-white mb-6">{heroData?.SubHeading}</p>

          <p className="text-sm text-white max-w-2xl mb-8">{heroData?.Description}</p>

          <div className="flex gap-4">
            <a
              href="/catalog"
              className="bg-black text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Shop Now
            </a>
            <a
              href="/#shopsection"
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
