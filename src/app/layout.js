"use client";
import "./globals.css";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Roboto} from 'next/font/google'
import { Inter } from 'next/font/google';

const roboto = Roboto({
  subsets:['latin'],
  weight:'400',
})

const inter = Inter({
  subsets: ['latin'], // Ensure you include valid subsets
  weight: '400',      // Specify weights if needed (optional)
});

import { Plus_Jakarta_Sans } from 'next/font/google';

// Configure the font
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'], // Specify the subset (commonly 'latin')
  weight: ['400', '700'], // Specify font weights you need
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
      <div className="sticky top-0 z-10">
      <Marquee />
      <Navbar />
      </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
