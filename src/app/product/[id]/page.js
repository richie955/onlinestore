"use client";

import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar"


export default function ProductSingle() {
  const { id } = useParams(); //how tfuckk did ti work>>/?
  //okay it works because the page is routed as product/[id].js
  //so any const {id} = useParams() will take the value of the value in" product/value"
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products/" + id +"?populate=*"
  );
  const product = data?.data
  console.log(product)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>

    <div className="container mx-auto p-4">
      <div className="flex gap-4 justify-center">
        <div className='flex flex-col w-[200px] gap-3 items-end'>
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
        <div className='flex flex-col '>
          <h1 className="text-3xl font-bold">{product.Name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.Description}</p>

          <span className="current-price">Rs.{product.CurrentPrice}</span>
          <span className="original-price">{product.OriginalPrice}</span>
          <span className="discount">{product.Discount}% OFF</span>
    


          <div className="mt-6">
            <h3 className="text-lg font-semibold">Select Size:</h3>
            <div className="flex gap-4 mt-2 ">
              {['S', 'M', 'L'].map((size) => (
                <button
                  key={size} className='border px-3 py-1 border-black hover:bg-gray-500'
                >
                  {size}
                </button>
              ))}
            </div>

          </div>
          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-4 ">
            <button className="bg-black text-white rounded-md px-4 py-2 hover:bg-gray-500">
              Add to Cart
            </button>
            <button className="bg-black text-white rounded-md px-4 py-2 hover:bg-gray-500">
              Add to WishList
            </button>
            <button className="bg-black text-white  rounded-md px-4 py-2 hover:bg-gray-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    Product Details - {id}</div>
}
