
"use client";

import styles from "./page.module.css"
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ShopSection from "./components/ShopSection";
import ProductCard from "./components/ProductCard"; // Import ProductCard




const HomePage = () => {
  // Sample product data to pass to ProductCard
  const product = {
    image: 'united1.avif',
    name: 'Manchester United Jersey',
    subtitle: 'Retro | 1990s',
    price: 1299,
    originalPrice: 1599,
    discount: 25,
  };

  const product2 = {
    image: '2.avif',
    name: 'Real Madrid Jersey',
    subtitle: 'Retro | 2023',
    price: 599,
    originalPrice: 899,
    discount: 25,
  };

  const product3 = {
    image: '3.avif',
    name: 'Barcelona Jersey',
    subtitle: 'Retro | 2004',
    price: 599,
    originalPrice: 899,
    discount: 25,
  };

  const product4 = {
    image: 'river1.avif',
    name: 'RiverPlate Jersey',
    subtitle: 'Retro | 1994',
    price: 1599,
    originalPrice: 1899,
    discount: 25,
  };


  return (
    <div>
      <Hero />
      
      <ShopSection/>
      <main >
      <div className="mx-auto  text-center flex flex-col ">
      <h2 className="text-4xl font-bold mb-4 uppercase">Our bestsellers</h2>
          <p className="text-lg text-gray-600 mb-5">
          Explore our exclusive collections of Retro and Classic jerseys.
        </p>
          <div className={styles.productgrid}>
          <div className="product-card-container">
          <ProductCard product={product2} />
        </div>
        <div className="product-card-container">
          <ProductCard product={product} />
        </div>
        <div className="product-card-container">
          <ProductCard product={product3} />
        </div>
        <div className="product-card-container">
          <ProductCard product={product4} />
        </div>
       
        <div className="product-card-container">
          <ProductCard product={product4} />
        </div>
        <div className="product-card-container">
          <ProductCard product={product4} />
        </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
