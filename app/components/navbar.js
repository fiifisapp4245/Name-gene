"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        {/* You can replace the text below with an actual logo */}
        <Link href="/">
          Logo
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
          Contact{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
