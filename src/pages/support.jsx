import React from "react";
import image from "../assets/images/c1.jpg"
import factory from "../assets/images/f1.jpg"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTruck, FaUndo, FaShieldAlt, FaUsers, FaBox } from "react-icons/fa";
export default function Support() {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16">        
      <div className="text-center mb-14">
     <img className="w-full rounded h-80 object-cover " src={image} alt="Customer Support" />
        <h1 className="text-4xl mt-4 md:text-5xl font-extrabold text-gray-900">We're Here to Help</h1>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-lg">
          From product quality to returns & shipping — we provide complete assistance for all your winter shopping needs.
        </p>
      </div>    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">       
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          <FaUsers className="text-amber-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Customer Care</h3>
          <p className="text-gray-600 mt-2">Phone & Email support for all queries.</p>
          <p className="mt-4 text-xl text-gray-800 font-bold">+91 98765 43210</p>
          <p className="text-gray-700">support@winterwear.com</p>
        </div>
      
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          <FaUndo className="text-blue-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Returns & Refunds</h3>
          <p className="text-gray-600 mt-2">
            Hassle-free 7-day return policy for all products.
          </p>
        </div>
        
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          <FaTruck className="text-green-600 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">Shipping & Delivery</h3>
          <p className="text-gray-600 mt-2">Fast, safe & reliable delivery across India.</p>
        </div>
      </div>
   
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How Our Products Are Made</h2>
        <img className="w-full rounded h-80 object-cover mb-6" src={factory} alt="Factory Manufacturing" />        
        <p className="text-gray-700 leading-relaxed text-lg">
          Our winter wear products are crafted in state-of-the-art manufacturing units located in 
          **Ludhiana, Jaipur and Delhi**. Each product goes through:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mt-3">
          <li>High-quality fabric selection (wool, fleece, thermal blend)</li>
          <li>Machine & hand-knitting process</li>
          <li>Quality checks for stitching & durability</li>
          <li>Comfort testing for softness & warmth</li>
          <li>Eco-friendly packaging to reduce waste</li>
        </ul>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">          
          <div className="bg-white p-6 shadow-md rounded-xl">
            <FaShieldAlt className="text-purple-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Premium Quality</h3>
            <p className="text-gray-600 mt-2">
              Only certified and lab-tested winter fabrics.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl">
            <FaBox className="text-orange-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">Careful Packaging</h3>
            <p className="text-gray-600 mt-2">
              Every product is packed safely to prevent damage.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl">
            <FaPhoneAlt className="text-red-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Call, chat, or email — anytime you need.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
        <h2 className="text-3xl font-bold text-gray-800">Contact Details</h2>
        <p className="text-gray-600 mt-2">We are always available to assist you!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">          
          <div>
            <FaPhoneAlt className="text-amber-600 text-2xl mb-2" />
            <h4 className="font-semibold text-lg">Phone Support</h4>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div>
            <FaEnvelope className="text-blue-600 text-2xl mb-2" />
            <h4 className="font-semibold text-lg">Email Support</h4>
            <p className="text-gray-600">help@winterwear.com</p>
          </div>

          <div>
            <FaMapMarkerAlt className="text-red-600 text-2xl mb-2" />
            <h4 className="font-semibold text-lg">Office Location</h4>
            <p className="text-gray-600">Jaipur, Rajasthan – 302001</p>
          </div>

        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <details className="bg-white p-4 rounded-xl shadow">
            <summary className="font-semibold cursor-pointer">What is your return policy?</summary>
            <p className="text-gray-600 mt-2">You can return any product within 7 days of delivery.</p>
          </details>

          <details className="bg-white p-4 rounded-xl shadow">
            <summary className="font-semibold cursor-pointer">Do you ship outside India?</summary>
            <p className="text-gray-600 mt-2">Currently, we only ship within India.</p>
          </details>

          <details className="bg-white p-4 rounded-xl shadow">
            <summary className="font-semibold cursor-pointer">How long does delivery take?</summary>
            <p className="text-gray-600 mt-2">Standard delivery takes 3–6 working days.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
