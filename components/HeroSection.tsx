"use client"; // Mark this component as Client-side

import { useState } from "react";

const HeroSection: React.FC = () => {
  const handleGetStartedClick = () => {
    // Scroll to the Puja Services section smoothly
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen bg-[url('/herobg.jpg')] bg-cover bg-center flex items-center justify-center"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-4xl font-extrabold leading-tight">
        भगवान शिव के आशीर्वाद से शांति और सुख प्राप्त करें
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium text-gray-200">
          यहाँ आप बिना किसी चिंता के पूजा बुकिंग कर सकते हैं और भगवान शिव के आशीर्वाद का अनुभव कर सकते हैं।
        </p>
        <div className="mt-8">
          <button
            onClick={handleGetStartedClick} // Corrected event handler
            className="px-10 py-4 bg-orange-400 hover:bg-blue-600 text-white font-medium text-xl rounded-lg shadow-lg transition"
          >
            शुरू करें
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
