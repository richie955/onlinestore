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
         <li><a href="/classics">Classics</a></li>
         <li><a href="/catalog">Catalog</a></li>
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


// const Navbar = () => {

 // 12cfb873178103cac994aca7c0c89bb60062f07ec11d727443523949adf89181676be706ce34ab633dbb4c2db123bb1f045a6942645276c2384e3492bb385ceee0fa28214c0f4effa2f6cb35f3e2c21dc8f3a3fb5ece56fe4b408b4f9489753b5790f5dcff5d56c0b41b5fd05f3ed085a2307e42f493efa73843a2702073725e
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
   
//   );
// };

