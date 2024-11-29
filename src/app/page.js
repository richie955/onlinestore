"use client";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import styles from "./page.module.css";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ShopSection from "./components/ShopSection";
import ProductCard from "./components/ProductCard"; // Import ProductCard
import useFetch from "./hooks/useFetch";
import BestSellers from "./components/bestsellers";
import SignIn from "./components/SignIn";

const HomePage = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?filters[isbestseller][$eq]=true"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const heroData = data?.data; // Sample product data to pass to ProductCard

  return (
    <SessionProvider>
      <div className="main">
        {/* Hero Section */}
        <Hero />

        {/* SignIn Section */}
        <div className="bg-gray-600 text-center py-10 rounded-lg my-10 mx-10">
          <SignIn />
        </div>

        {/* Shop Section */}
        <ShopSection />

        {/* Best Sellers Section - Pass data to BestSellers component */}
        <BestSellers products={heroData} />

        <main>
          {/* Additional sections or content can go here */}
        </main>


      </div>
    </SessionProvider>
  );
};

export default HomePage;
