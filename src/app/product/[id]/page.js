import React from 'react';

// Hardcoded products data
const products = [
  {
    id: '1',
    name: 'Real Madrid Home Kit',
    description: 'Home Kit of Real Madrid FC ~ 2023-24',
    price: 599,
    image: '/2.avif',
  },
  {
    id: '2',
    name: 'Modern Jersey',
    description: 'A sleek and stylish jersey designed for peak performance.',
    price: 59.99,
    image: '/1.avif',
  },
];

// Function to get a product by ID
function getProduct(id) {
  return products.find((product) => product.id === id);
}

// Product Page Component
export default function ProductPage({ params }) {
  const product = getProduct(params.id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 justify-center">
        <div className='flex flex-col w-[200px] gap-3 items-end'>
        <img
          src={product.image}
          alt={product.name}
           className="w-[80px] h-[80px] object-cover rounded-md"
        />
         <img
          src={product.image}
          alt={product.name}
          className="w-[80px] h-[80px] object-cover rounded-md"
        />
         <img
          src={product.image}
          alt={product.name}
          className="w-[80px] h-[80px] object-cover rounded-md"
        />
        

        </div>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-[500px] h-[600px] object-cover rounded-md"
        />

        {/* Product Details */}
        <div className='flex flex-col '>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price.toFixed(2)}</p>

         

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
            <button className="bg-black text-white  rounded-md px-4 py-2 hover:bg-gray-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for hardcoded products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
