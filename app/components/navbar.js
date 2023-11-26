"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-2 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">NameGene</Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            Menu
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center`}
        >
          <Link
            href="/"
            className="block lg:inline-block p-2 text-black hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block lg:inline-block p-2 text-black hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block lg:inline-block p-2 text-black hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



