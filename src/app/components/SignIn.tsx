"use client"; // Mark the file as a client component for interactivity

import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react"; // Use next-auth for session management

export default function SignIn() {
  // Get the session state from NextAuth
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("Session:", session); // Log session details to the console for debugging
  }, [session]);

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      await signIn("google"); // Trigger the Google sign-in flow
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(); // Trigger the sign-out flow
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };

  return (
    <div>
      {/* Check if the user is authenticated */}
      {status === "authenticated" ? (
        <div>
          <h1>Welcome, {session.user?.name || "User"}!</h1>
          <button
            className="bg-red-500 text-white p-3 rounded-lg"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      ) : (
        <form onSubmit={handleSignIn}>
          <button type="submit">
            <div className="flex align-center border-[1px] w-[280px] border-gray-500 hover:border-black mt-3 ">
              <div className=" text-white  flex items-center justify-center bg-blue-600 p-2 px-4 w-[300px]">
                Sign In with Google
              </div>
              <div className="h-12 bg-white w-16 p-2 px-4 flex ">
                <img className="object-contain" src="/logos/google.png"></img>
              </div>
            </div>
          </button>
        </form>
      )}
    </div>
  );
}
