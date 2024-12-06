"use client"; // Mark this component as Client-side

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
    <nav className="bg-cover bg-center bg-orange-400 text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-3xl font-extrabold"> {/* Increased font size for title */}
          {/* Website Icon */}
          <div className="border-2 border-orange-400 rounded-full p-2">
            <Image
              src={LogoIcon}
              alt="वेबसाइट आइकन"
              width={60} // Increased width for bigger icon
              height={60} // Increased height for bigger icon
              className="rounded-full"
            />
          </div>
          <span>Babadham Darshan</span> {/* Updated title in Hindi */}
        </div>

        {/* Hamburger Menu */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="navbar-menu"
        >
          <span className="sr-only">नेविगेशन टॉगल करें</span> {/* Accessibility improvement */}
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
          id="navbar-menu"
          className={`fixed lg:static top-16 left-0 w-full lg:w-auto ${
            isOpen ? "flex" : "hidden"
          } lg:flex lg:space-x-8 text-gray-300 font-medium transition-all duration-300 ${
            isOpen ? "flex flex-col space-y-4 p-8 bg-orange-400" : ""
          }`}
        >
          <li className="text-center lg:inline-block text-xl font-semibold"> {/* Slightly bolder and smaller */}
            <Link href="#services" onClick={() => setIsOpen(false)}>
              पूजा सेवाएं
            </Link>
          </li>
          <li className="text-center lg:inline-block text-xl font-semibold"> {/* Slightly bolder and smaller */}
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              संपर्क करें
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
