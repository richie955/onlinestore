import React, { useState } from "react";
import "./Navbar.css";



export default function DropdownAnimation() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return ( 
    <div>
       <nav className="navbar">
      
      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
         <div className="bar"></div>
         <div className="bar"></div>
         <div className="bar"></div>
       </div>
 
       {/* Left: Company Name */}
       <div className="navbar-logo">jersey'24.inc</div>
 
 
       {/* Center: Navigation Links */}
       <ul className="navbar-links">
         <li><a href="/">Home</a></li>
         <li><a href="/">Classics</a></li>
         <li><a href="#catalog">Catalog</a></li>
         <li><a href="/about">About Us</a></li>
         <li><a href="/about#contact">Contact</a></li>
       </ul>
 
       
       {/* Right: Search Bar and Buttons */}
       <div className="navbar-actions">
         {/* <input type="text" className="search-bar" placeholder="Search" /> */}
         <button className="btn"><img src="user.png"></img></button>
         <button className="btn"><img src="bag.png"></img></button>
         <button className="btn"><img src="wishlist.png"></img></button>
       </div>
 
       <div className="navbar-actions-mob">
         <button className="btn"><img src="bag.png"></img></button>
         <button className="btn"><img src="wishlist.png"></img></button>
       </div>
 
      
     </nav>

     <div className=" max-w-md  p-4 mx-4 pt-2">
     

      <div
        className={`transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[220px] pt-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="bg-black rounded-xl pt-2">
        <ul className="flex flex-col   text-white pl-6 uppercase font-extrabold">
        <li className="border-b mb-4 py-1 border-white"><a href="/">Home.</a></li>
        <li className="border-b mb-4 py-1 border-white"><a href="/">Classics.</a></li>
        <li className="border-b mb-4 py-1 border-white"><a href="#catalog">Catalog.</a></li>
        <li className="border-b mb-4 py-1 border-white"><a href="/about">About Us.</a></li>
        <li className="border-b pb-2 border-white"><a href="/about#contact">Contact.</a></li>
      </ul>
        </div>
      </div>

     
    </div>
    </div>

    
  );
}


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
   
//   );
// };

