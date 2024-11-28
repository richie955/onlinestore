import React from 'react';

const AboutPage = () => {
  return (
    <div className="px-8 py-12 text-justify bg-gray-50 border-black">
      {/* Intro Section */}
      <section className="text-center bg-black border-2 text-white py-16 border-b-4 border-black rounded-lg  shadow-md mb-16">
        <h1 className="text-4xl font-bold">Welcome to Our Jersey Store</h1>
        <p className="text-lg mt-4 text-gray-300 ">
          We are passionate about providing high-quality jerseys for sports enthusiasts, collectors, and fashion lovers alike.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-8 px-6  border-2 border-b-4 border-black  rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700">
          Founded with a love for the game, we started this store to offer premium jerseys for fans all around the world. Whether you're looking for a classic design or a modern cut, we have something for every occasion and style. Our jerseys are designed with comfort, durability, and style in mind. Each product is carefully selected to ensure the highest quality.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-8 px-6 border-2  border-b-4 border-black  rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is simple: to provide the best sports jerseys for our customers. We believe that everyone should have access to the jersey that represents their team or sport with pride. Our commitment to quality, customer service, and sustainability drives everything we do.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="bg-white py-8 px-6 border-2 border-b-4 border-black  rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-inside list-none text-lg text-gray-700">
          <li><span className='font-extrabold'>Quality</span>: We never compromise on the quality of our jerseys.</li>
          <li><span className='font-extrabold'>Quality</span>: We are as passionate about sports as you are.</li>
          <li><span className='font-extrabold'>Customer Satisfaction</span> : Your satisfaction is our top priority.</li>
          <li><span className='font-extrabold'>Sustainability</span>: We are committed to sustainable practices in sourcing and production.</li>
        </ul>
      </section>

      
      <section  id="contact" className="  border-2 text-center py-8 px-6 bg-white border-b-4 rounded-lg border-black  shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">If you have any questions, feel free to reach out. We’re here to help!</p>
        <p className="text-lg font-semibold text-gray-800 mt-4">Email us at: <strong>support@jerseystore.com</strong></p>
      </section>
    </div>
  );
};

export default AboutPage;
