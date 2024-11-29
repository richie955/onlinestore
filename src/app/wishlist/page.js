"use client";
import React, { useState } from "react";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    console.log("Add to cart:", item);
    // Implement adding to the cart logic
  };

  return (
    <div className="wishlist-page pl-8 text-center">
       <h2 className="text-4xl  font-bold mb-3  uppercase">Your wishlist</h2>
  {wishlistItems.length === 0 ? (
    <div className="empty-wishlist">
      <p className="text-lg text-gray-600  mb-5">
      You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.
      </p>
      <a href="/" className="button bg-black rounded-sl text-white py-2 px-2 ">
            Browse Jerseys
          </a>
        </div>
      ) : (
        <div className="wishlist-content">
          {wishlistItems.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>Category: {item.category}</p>
                <p>Year: {item.year}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
