import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import styles from "../page.module.css";

import Link from "next/link";

const BestSellers = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products?filters[isbestseller][$eq]=true&populate=*"
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
    const ProductId =product.id||0;
    const DocID=product.documentId||"";

    // Return the formatted object
    return {
      image,
      name,
      subtitle,
      description,
      price: currentPrice,
      originalPrice,
      discount,
      ProductId,
      DocID

    };
  });

  return (
    <div>
      <div className="mx-auto  text-center flex flex-col ">
        <h2 className="text-4xl font-bold mb-4 uppercase">Our bestsellers</h2>
        <p className="text-lg text-gray-600 mb-5">
          Explore our exclusive collections of Retro and Classic jerseys.
        </p>
        <div className={styles.productgrid}>
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
