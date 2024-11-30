"use client"; // Ensures this component runs client-side

import { useState } from "react";
import Link from "next/link";

export default function Register() {

  const [username,setUsername]=useState(''); //METHOD1
  const [email, setEmail] = useState('');     //METHOD1
  const [password, setPassword] = useState(''); //METHOD1
  const [message, setMessage] = useState(null);

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    // const jsonData = { username, email, password }; METHOD1 CONTINUATION

    console.log(Object.fromEntries(formData));

    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };

    const req = await fetch(
      "http://localhost:1337/api/auth/local/register",
      reqOptions
    );
    const res = await req.json();

    if (res.error) {
      console.log(res.error.message);
      setMessage(res.error.message);
      return;
    }

    if (res.jwt && res.user) {
      setMessage("Successfull registration.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={register}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              name="username"
              id="username"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {message && (
            <p
              className={`mt-2 mb-3 text-center ${
                message.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
//you need name field in input so that formdata can parse the required stuff from the input/form box.