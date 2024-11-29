import React, { useState } from "react";
import Modal from "./model" // Import the Modal component
import "./Navbar.css";

export default function DropdownAnimation() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="navbar-logo">
          <a href="/">jersey'24.inc</a>
        </div>

        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/classics">Classics</a></li>
          <li><a href="/catalog">Catalog</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/about#contact">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="btn" onClick={toggleModal}>
            <img src="user.png" alt="User Icon" />
          </button>
          <button className="btn">
            <a href="/cart"><img src="bag.png" alt="Cart" /></a>
          </button>
          <button className="btn">
            <a href="/wishlist"><img src="wishlist.png" alt="Wishlist" /></a>
          </button>
        </div>

        <div className="navbar-actions-mob">
          <button className="btn">
            <img src="bag.png" alt="Cart" />
          </button>
          <button className="btn">
            <img src="wishlist.png" alt="Wishlist" />
          </button>
        </div>
      </nav>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

      <div className="max-w-md p-4 mx-4 pt-2">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[220px] pt-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="bg-black rounded-xl pt-2">
            <ul className="flex flex-col text-white pl-6 uppercase font-extrabold">
              <li className="border-b mb-4 py-1 border-white"><a href="/">Home.</a></li>
              <li className="border-b mb-4 py-1 border-white"><a href="/classics">Classics.</a></li>
              <li className="border-b mb-4 py-1 border-white"><a href="/catalog">Catalog.</a></li>
              <li className="border-b mb-4 py-1 border-white"><a href="/about">About Us.</a></li>
              <li className="border-b pb-2 border-white"><a href="/about#contact">Contact.</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
