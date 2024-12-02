"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Cart() {
  const [Cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [tprice, setTprice] = useState(0); // Initialize total price to 0

  const calculateTotalPrice = (cart) => {
    const total = cart.reduce(
      (acc, item) => acc + item.cartquantity * item.product.CurrentPrice,
      0
    );
    setTprice(total); // Update the total price state
  };

  useEffect(() => {
    const fetchCart = async () => {
      const token = sessionStorage.getItem("token");
      const user = sessionStorage.getItem("user");

      if (!token) {
        setError("User not authenticated. Please log in.");
        return;
      }

      try {
        const req = await fetch(
          `http://localhost:1337/api/carts?filters[users_permissions_user][username][$eq]=${encodeURIComponent(
            JSON.parse(user).username
          )}&populate[product][populate]=images`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const res = await req.json();

        if (req.ok) {
          const cartItems = res.data || [];
          setCart(cartItems);
          calculateTotalPrice(cartItems); // Calculate total price after setting the cart
        } else {
          setError("Failed to fetch Cart.");
        }
      } catch (err) {
        setError("An unexpected error occurred.");
      }
    };

    fetchCart();
  }, []); // Runs once when the component mounts

  return (
    <div>
      {error && <p className="text-red-100 text-center">{error}</p>}

      {!error && Cart.length === 0 && (
        <p className="text-center">Your Cart is empty.</p>
      )}

      {Cart.length > 0 && (
        <div className="text-center flex flex-col text-white font-semibold mb-10 bg-gray-600 py-4 text-lg">
          Total Price: Rs.{tprice.toFixed(2)}
          <Link href="/checkout">
            {" "}
            <button className="bg-black p-2 px-4 rounded-lg mt-4  hover:bg-slate-800 hover:p-6 transition-all duration-500">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Cart.map((CartItem) => (
          <div key={CartItem.id}>
            <div className="border p-4 rounded-lg shadow-md mb-4">
              <img
                src={`/${CartItem.product.images[0]?.name}`}
                alt={CartItem.product.Name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{CartItem.product.Name}</h3>
              <p className="text-sm text-gray-600">
                {CartItem.product.Description}
              </p>
              <p className="text-sm text-gray-600">
                Quantity: {CartItem.cartquantity}
              </p>
              <p className="font-semibold text-lg mt-2">
                Rs.{CartItem.product.CurrentPrice}{" "}
                <span className="line-through text-gray-500">
                  Rs.{CartItem.product.OriginalPrice}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Total Price: Rs.
                {(
                  CartItem.cartquantity * CartItem.product.CurrentPrice
                ).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
