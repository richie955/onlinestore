
"use client";

import styles from "./page.module.css"
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ShopSection from "./components/ShopSection";
import ProductCard from "./components/ProductCard"; // Import ProductCard
import useFetch from "./hooks/useFetch";
import BestSellers from "./components/bestsellers";


const HomePage = () => {

  const { loading, error, data } = useFetch(
  "http://localhost:1337/api/products?filters[isbestseller][$eq]=true"
);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

const heroData = data?.data;
  // Sample product data to pass to ProductCard



  return (
    <div className="main">
      <Hero />
      <ShopSection/>
      <BestSellers/>
      <main >
      
      </main>
    </div>
  );
};

export default HomePage;
