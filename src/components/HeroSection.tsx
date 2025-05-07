
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1920&auto=format')] bg-cover bg-center min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
            Welcome to <span className="text-tea-100">Tea Day</span>
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Experience the perfect blend of artisan teas, specialty coffees, and delicious food in a cozy atmosphere.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/menu" className="btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 border border-white/30">
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
