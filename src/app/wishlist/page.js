"use client";
import { useState, useEffect } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token from localStorage
     
      if (!token) {
        setError("User not authenticated. Please log in.");
        return;
      }

      try {
        const req = await fetch("http://localhost:1337/api/wishlists?populate[products][populate]=images", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const res = await req.json();
        const imageName = res.data[0]?.products.images && product.images.length > 0 ? product.images[0].name : null;
        const imageUrl = imageName ? `http://localhost:1337/uploads/${imageName}` : null;


        console.log(res)

        if (req.ok) {
          // Assuming your API response contains a `data` array with a "products" field
          setWishlist(res.data[0]?.products || []);  // Access the products field
        } else {
          setError(res.error?.message || "Failed to fetch wishlist.");
        }
      } catch (err) {
        setError("An unexpected error occurred.");
      }
    };

    fetchWishlist();
  }, []); // Empty dependency array ensures this runs once when the component mounts

 
 
  return (
    <div>
      {error && (
        <p className="text-red-500 text-center">{error}</p>
      )}

      {!error && wishlist.length === 0 && (
        <p className="text-center">Your wishlist is empty.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              // src={`https://localhost:1337/uploads/${product.images[0].name}`} // Assuming there's an images field
              src={`/${product.images[0].name}`}  //this works.
              alt={product.Name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{product.Name}</h3>
            <p className="text-sm text-gray-600">{product.Description}</p>
            <p className="font-semibold text-lg mt-2">
              ${product.CurrentPrice}{" "}
              <span className="line-through text-gray-500">${product.OriginalPrice}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
