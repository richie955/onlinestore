import React from "react";
import "./ShopSection.css";
const ShopSection = () => {
  return (
    <section id="shopsection" className="bg-white text-black py-16 ">
      <div className="mx-auto px-6 text-center flex flex-col">
        {/* Section Header */}
        <h2  className="text-4xl font-bold mb-5 uppercase ">Choose Your Style</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our exclusive collections of Retro and Classic jerseys.
        </p>

        <div className="grid grid-cols-1 h-[350px] md:grid-cols-2 gap-5">
          {/* Retro Section */}
          <div className="group relative bg-black text-white rounded-lg overflow-hidden shadow-md">
            <div
              className="absolute inset-0 opacity-30  group-hover:opacity-40 transition duration-300 bg-cover bg-center"
              style={{ backgroundImage: `url('/united1.avif')` }}
            ></div>
            <div className="button1">
              <h3 className="text-2xl font-semibold mb-4">Shop Retro</h3>
              <button className="bg-white text-black px-6 py-2 font-medium rounded hover:bg-gray-200 transition">
                Explore Retro
              </button>
            </div>
          </div>

          {/* Classics Section */}
          <div className="group relative bg-black text-white rounded-lg overflow-hidden shadow-md">
            <div
              className="absolute inset-0 opacity-30 group-hover:opacity-40 transition duration-300 bg-cover bg-center"
              style={{ backgroundImage: `url('/barca.png')` }}
            ></div>
            <div className="button2">
              <h3 className="text-2xl font-semibold mb-4">Shop Classics</h3>
              <button className="bg-white text-black px-6 py-2 font-medium rounded hover:bg-gray-200 transition">
                Explore Classics
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
