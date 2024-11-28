import React, { useState } from 'react';
import "./ProductCard.css";

// Sample data for the product
const ProductCard = ({ product }) => {

  const [isWished, setIsWished] = useState(false);  // Wishlist toggle

  const handleWishlistToggle = () => {
    setIsWished(!isWished);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
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
  );
};

export default ProductCard;
