import React, { useState } from 'react';
import "./ProductCard.css";
import Link from 'next/link';

// Sample data for the product
const ProductCard = ({ product }) => {

 

  return (
    <Link href={`/product/${product.DocID}`}>
 
    <div className="product-card">
      <div className="product-image ">
  <img className='w-full aspect-[1/1] object-fit' src={`http://localhost:1337${product.image}`} alt={product.name} />
</div>


      <div className="price">
          <span className="current-price">Rs.{product.price}</span>
          <span className="original-price">{product.originalPrice}</span>
          <span className="discount">{product.discount}% OFF</span>
        </div>


      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-subtitle">{product.subtitle}</p>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
