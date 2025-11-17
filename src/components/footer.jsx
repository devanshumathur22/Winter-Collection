import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">        
        <div>
          <h2 className="text-2xl font-bold text-white">WinterWear</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Premium winter fashion crafted with warmth, quality, and comfort.
            Stay cozy. Stay stylish.
          </p>
        </div>       
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/#home" className="hover:text-amber-500">Home</Link></li>
            <li><Link to="/#men" className="hover:text-amber-500">Men</Link></li>
            <li><Link to="/#women" className="hover:text-amber-500">Women</Link></li>
            <li><Link to="/#kids" className="hover:text-amber-500">Kids</Link></li>
            <li><Link to="/contact" className="hover:text-amber-500">Contact</Link></li>
          </ul>
        </div>     
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/support" className="hover:text-amber-500">Help & Support</Link></li>
            <li><Link to="/support" className="hover:text-amber-500">Return Policy</Link></li>
            <li><Link to="/support" className="hover:text-amber-500">Shipping Info</Link></li>
            <li><Link to="/review" className="hover:text-amber-500">Customer Reviews</Link></li>
          </ul>
        </div>      
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start">
              <FaPhoneAlt className="text-amber-500 mt-1" />
              +91 98765 43210
            </li>
            <li className="flex gap-3 items-start">
              <FaEnvelope className="text-amber-500 mt-1" />
              support@winterwear.com
            </li>
            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-amber-500 mt-1" />
              Jaipur, Rajasthan – 302001
            </li>
          </ul>
        </div>
      </div>  
      <div className="mt-12 flex justify-center gap-6 text-xl">
        <FaFacebookF className="hover:text-amber-500 cursor-pointer" />
        <FaInstagram className="hover:text-amber-500 cursor-pointer" />
        <FaTwitter className="hover:text-amber-500 cursor-pointer" />
        <FaYoutube className="hover:text-amber-500 cursor-pointer" />
      </div>    
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} WinterWear. All Rights Reserved.
      </div>
    </footer>
  );
}
