"use client";

import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "next/navigation";
import WishlistButton from "../../components/WishlistButton";
import CartButton from "../../components/CartButton";
import QuantitySelector from "../../components/QuantitySelector";

export default function ProductSingle() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const userid = user?.id;

  const[size,setSize]=useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    console.log("Selected Quantity:", newQuantity);
    setSelectedQuantity(newQuantity);
  };

  console.log(`user id is: ` + userid);

  const { id } = useParams(); //how tfuckk did ti work>>/?
  //okay it works because the page is routed as product/[id].js
  //so any const {id} = useParams() will take the value of the value in" product/value"
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products/" + id + "?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data?.data;

  console.log(user?.documentId);
  console.log(product);

  const body = {
    data: {
      users_permissions_user: user?.documentId,
      product: product?.documentId,
    },
  };

  const productid = product.id;

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col w-[200px] gap-3 items-end">
            <img
              src={`/${product.images[0].name}`}
              alt={product.name}
              className="w-[80px] h-[80px] object-cover rounded-md"
            />
            <img
              src={`/${product.images[0].name}`}
              alt={product.name}
              className="w-[80px] h-[80px] object-cover rounded-md"
            />
            <img
              src={`/${product.images[0].name}`}
              alt={product.name}
              className="w-[80px] h-[80px] object-cover rounded-md"
            />
          </div>
          {/* Product Image */}
          <img
            src={`/${product.images[0].name}`}
            alt={product.name}
            className="w-[500px] h-[600px] object-cover rounded-md"
          />

          {/* Product Details */}
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold">{product.Name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.Description}</p>

            <span className="current-price">Rs.{product.CurrentPrice}</span>
            <span className="original-price">{product.OriginalPrice}</span>
            <span className="discount">{product.Discount}% OFF</span>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Select Size:</h3>
              <div className="flex gap-4 mt-2 ">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size} onClick={()=>setSize(size)}
                    className="border px-3 py-1 border-black hover:bg-gray-500"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-4 ">
            <QuantitySelector initialQuantity={1} min={1} max={10} onChange={handleQuantityChange} />
              <div className="bg-black text-white rounded-md px-4 py-2 hover:bg-gray-500">
                <CartButton
                  product={product}
                  productId={productid}
                  id={userid}
                  cqty={selectedQuantity}
                  size={size}
                />
              </div>

              <div className="bg-black text-white rounded-md px-4 py-2 hover:bg-gray-500">
                <WishlistButton
                  product={product}
                  productId={productid}
                  id={userid}
                />
              </div>

        
            </div>
          </div>
        </div>
      </div>
      Product Details - {id}
    </div>
  );
}
