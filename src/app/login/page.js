// app/login/page.js
"use client"; // Ensures this component runs client-side

import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";
import SignIn from "../components/SignIn";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider

export default function login() {
  const [user, setUser] = useState(null);

  // Check for user token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token"); // JWT token
    const username = localStorage.getItem("username"); // Optional username dosent work because we havent stored username  ps: i edited code so now username is stored.

    if (token) {
      setUser({ username: username || "User" }); // Fallback to "User" if username is not stored
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Clear the token
    localStorage.removeItem("username"); // Clear the username (optional)
    setUser(null); // Reset user state
  };

  const [message, setMessage] = useState(null);
  const login = async (e) => {
    e.preventDefault();
    setMessage(null);

    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData);

    console.log(jsonData);

    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };

    const req = await fetch("http://localhost:1337/api/auth/local", reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage("Successfull Login");
      localStorage.setItem("token", res.jwt); // Save JWT for authenticated requests
      console.log(res.user.username);
      localStorage.setItem("username", res.user.username); //my code lmaooo just stored the username as a cookkiee so login status works
      // window.location.href = "/wishlist";  // Redirect to the wishlist page
    }
  };

  // i need a fnctino to check if users is logged in already if its the case give a greeting and option to sign out.
  return (
    <SessionProvider>
      <div>
        {user ? (
          <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Hello, {user.username}!
                </h2>
                <button
                  type="submit"
                  onClick={handleSignOut}
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  SignOut
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
              <form onSubmit={login}>
                <div className="mb-4">
                  <label
                    htmlFor="identifier"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    name="identifier"
                    type="email"
                    id="identifier"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                  Login
                </button>
                <div className="mt-4 relative flex flex-col items-center ">
                  <h1 className=" text-center  px-4 text-lg bg-white">OR</h1>

                  
                </div>
              </form>
              <SignIn />
              {message && (
                <p
                  className={`mt-2 mb-3 text-center ${
                    message.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {message}
                </p>
              )}
              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link href="/register" className="text-blue-500">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </SessionProvider>
  );
}
