"use client";
import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page text-center">
       <h2 className="text-4xl  font-bold mb-3 uppercase">Your Cart</h2>
  {cartItems.length === 0 ? (
    <div className="empty-wishlist">
      <p className="text-lg text-gray-600  mb-5">
        your cart is empty.
      </p>
      <a href="/shop" className="button bg-black text-white py-2 px-2 ">
            Browse Jerseys
          </a>
        </div>
      ) : (
        <div className="cart-content">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <p>Category: {item.category}</p>
                <p>Year: {item.year}</p>
                <p>Price: ${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, +e.target.value)}
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <p>Total: ${total.toFixed(2)}</p>
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
