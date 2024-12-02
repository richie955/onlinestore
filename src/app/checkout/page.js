"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CheckoutPage = () => {
  const [Cart, setCart] = useState([]);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const [Tprice, setTprice] = useState(0);
  const [error, setError] = useState(null);
  const router = useRouter();  // Initialize the router for navigation

  const placeorder = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.target);
    const jsonData =  Object.fromEntries(formData);

    console.log("Form data submitted:", JSON.stringify(jsonData));

    const token = sessionStorage.getItem("token");  // Retrieve token

    if (!token) {
      setError("User not authenticated.");
      return;
    }

    const reqOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        data: jsonData,}),
    };
    
    try {
        console.log(JSON.stringify({
            data: jsonData,}))
      const req = await fetch("http://localhost:1337/api/orderdetails", reqOptions);
      const res = await req.json();

      if (res.error) {
        console.log(res.error.message);
        setError(res.error.message);
        toast.error(res.error.message);  // Display the error message
        return;
      }

      // On successful order
      toast.success("Order placed successfully");
      router.push('/myorders');  // Navigate to the placed orders page
    } catch (err) {
      setError("An unexpected error occurred.");
      toast.error("An unexpected error occurred.");
      console.error(err);
    }
  };

  const calculateTotalPrice = (Cart) => {
    const total = Cart.reduce(
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
          const Cart = res.data || [];
          setCart(Cart);
          calculateTotalPrice(Cart); // Calculate total price after setting the cart
        } else {
          setError("Failed to fetch Cart.");
        }
      } catch (err) {
        setError("An unexpected error occurred.");
      }
    };

    fetchCart();
  }, []); // Runs once when the component mounts

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>

      {/* Cart Items */}
      <div className="cart-summary bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-medium mb-4">Your Cart</h2>
        {Cart.map(item => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.product.Name} x {item.cartquantity}</p>
            <p>Rs.{item.product.CurrentPrice * item.cartquantity}</p>
          </div>
        ))}
      </div>

      {/* Shipping Form */}
      <div className="shipping-form bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
        <form onSubmit={placeorder}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingDetails.name}
              onChange={handleShippingChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingDetails.address}
              onChange={handleShippingChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingDetails.city}
              onChange={handleShippingChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              value={shippingDetails.zipCode}
              onChange={handleShippingChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="order-summary text-xl font-medium mb-4">
            <p>Total <span className="font-bold">Rs.{Tprice}</span></p>
          </div>

          {/* Payment Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
