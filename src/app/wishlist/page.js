"use client";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = sessionStorage.getItem("token"); // Retrieve the token from sessionStorage
      const user = sessionStorage.getItem("user");

      if (!token) {
        setError("User not authenticated. Please log in.");
        return;
      }
      console.log(JSON.parse(user).username);
      try {
        const req = await fetch(
          `http://localhost:1337/api/wishlists?filters[users_permissions_user][username][$eq]=${encodeURIComponent(
            JSON.parse(user).username
          )}&populate[product][populate]=images`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const res = await req.json();

        console.log(res);

        // const imageName = res.data[0]?.products.images && product.images.length > 0 ? product.images[0].name : "hug";
        // const imageUrl = imageName ? `http://localhost:1337/uploads/${imageName}` : "hfj";

        // console.log(imageName+imageUrl)

        console.log(res.data[0]);

        if (req.ok) {
          // Assuming your API response contains a `data` array with a "products" field
          setWishlist(res.data || []); // Access the products field
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
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!error && wishlist.length === 0 && (
        <p className="text-center">Your wishlist is empty.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((wishlistItem) => (


          // Since each wishlist has one product, access it directly
          <div key={wishlistItem.id}>
              <Link href={`/product/${wishlistItem.product.documentId}`}>
              {/* <ProductCard product={wishlistItem.product} /> */}
               <div><div className="border p-4 max-w-[300px] rounded-lg shadow-md mb-4">
                <img
                
                  // src={`http://localhost:1337/uploads/${wishlistItem.product.images[0]?.name}`} 
                  // Assuming the image name is correct
                  
                  src={`/${wishlistItem.product.images[0]?.name}`}
                  alt={wishlistItem.product.Name}
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="flex flex-col">
                  {/* <div className="bg-black text-center text-white px-2 w-40 py-1 rounded-lg hover:w-60 transition-all duration-200"><CartButton></CartButton></div> */}
                  <div><h3 className="text-xl font-semibold">
                  {wishlistItem.product.Name}
                </h3>
                <p className="text-sm text-gray-600">
                  {wishlistItem.product.Description}
                </p>
                <p className="font-semibold text-lg mt-2">
                  ${wishlistItem.product.CurrentPrice}{" "}
                  <span className="line-through text-gray-500">
                    ${wishlistItem.product.OriginalPrice}
                  </span></p></div>
                </div>
                
              </div> </div>

              </Link>
          </div>
        
        ))}
      </div>
    </div>
  );
}
