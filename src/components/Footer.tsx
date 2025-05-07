
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tea-900 text-white pt-12 pb-8">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Tea Day</h3>
            <p className="text-tea-100 mb-4">
              A cozy spot serving delightful teas, coffee, and delicious food to brighten your day.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-tea-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-tea-100 hover:text-white transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-tea-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-tea-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-serif font-semibold mb-4">Visit Us</h4>
            <address className="not-italic text-tea-100">
              <p>Windsor Amulyam, Kamanahalli Main Rd</p>
              <p>Doddakammanahalli, 560076</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@teaday.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-tea-800 pt-6 text-center text-tea-200">
          <p>&copy; {new Date().getFullYear()} Tea Day. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
