"use client";

import { useState, useEffect } from "react";
import LogoIcon from "../images/logo.webp";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Ensure the menu is visible on desktop even if `isOpen` is false
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false); // Reset `isOpen` when switching to desktop
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="bg-cover bg-center bg-orange-400 text-white sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          {/* Website Icon */}
          <div className="border-2 border-orange-400 rounded-full p-1">
          <Image
            src={LogoIcon} // Replace with your image path
            alt="Website Icon"
            width={40} // Adjust size as needed
            height={40}
            className="rounded-full" // Optional: Add rounded corners
          /></div>
          <span>Baidyanathdham Darshan</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle Navigation</span>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed lg:static top-16 left-0 w-full lg:w-auto ${
            isOpen ? "flex" : "hidden"
          } lg:flex lg:space-x-6 text-gray-300 font-medium transition-all duration-300 ${
            isOpen ? "flex flex-col space-y-4 p-8 bg-orange-400" : ""
          }`}
        >
          <li className="text-center lg:inline-block">
            <Link href="#services" onClick={() => setIsOpen(false)}>
              Pooja Services
            </Link>
          </li>
          <li className="text-center lg:inline-block">
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
