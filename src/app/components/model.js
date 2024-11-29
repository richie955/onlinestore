// Modal.js
import React from "react";
import SignIn from "./SignIn";
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl flex flex-col items-center shadow-lg max-w-md  relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-duration-300 ease-in-out rounded-lg focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-duration-300 ease-in-out rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-duration-300 ease-in-out rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-black  text-white py-2 px-4 rounded-lg"
          >
            Sign Up
          </button>

          <div className="mt-4 relative  ">
            <h1 className=" text-center  px-4 text-lg bg-white">OR</h1>

            <div className="flex align-center border-[1px] w-[280px] border-gray-500 hover:border-black mt-3 ">
           
              
              <div className=" text-white  flex items-center justify-center bg-blue-600 p-2 px-4 w-[300px]">Sign In with Google</div>
              <div className="h-12 bg-white w-16 p-2 px-4 flex ">
                <img className="object-contain" src="/logos/google.png"></img>
          
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
