"use client";

import Hero from "./components/Hero";
import ShopSection from "./components/ShopSection";
import useFetch from "./hooks/useFetch";
import BestSellers from "./components/bestsellers";

const HomePage = () => {
  const { loading, error, data } = useFetch(
    "https://store-theta-lyart.vercel.app/api/products?filters[isbestseller][$eq]=true"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const heroData = data?.data; // Sample product data to pass to ProductCard

  return (
    <div className="main">

      <Hero />
      {/* <ShopSection />
      <BestSellers products={heroData} /> */}
      <main></main>
      
    </div>
  );
};

export default HomePage;
