"use client";
import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import styles from "../page.module.css";

const BestSellers = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Map the fetched data into the desired format
  const products = data?.data.map((product) => {
    // Extract the product details
    const image = product?.images[0]?.url || ""; // Getting the image URL (assuming first image is main)
    const name = product.Name || "No Name";
    const subtitle = product.Subtitle || "No Subtitle";
    const description = product.Description || "No Description";
    const currentPrice = product.CurrentPrice || 0;
    const originalPrice = product.OriginalPrice || 0;
    const discount = product.Discount || 0;

    // Return the formatted object
    return {
      image,
      name,
      subtitle,
      description,
      price: currentPrice,
      originalPrice,
      discount,
    };
  });

  return (
    <div>
        <div className="mt-10  flex flex-col ">
        <div>
          <h2 className="text-4xl pl-8 font-bold mb-3 uppercase">Our Collections</h2>
          <p className="text-lg text-gray-600 pl-8 mb-5">
            Choose from Our Premium Collections for your Wardrobe.
          </p>
        </div>
        <div className={styles.productgrid}>
          {products?.map((product, index) => (
            <div key={index}>
              <div className="product-card-container">
                <ProductCard product={product} />
              </div>
            </div>
          ))}

          {products?.map((product, index) => (
            <div key={index}>
              <div className="product-card-container">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;