import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Contact() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:8000/api/contact/send-message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, subject, message }),
  });

  const data = await res.json();
  alert(data.message);
};

  return (
    <section
      id="contact"
      className="w-full bg-gray-100 py-16 px-6 flex flex-col items-center">
    
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Contact Us
      </h2>
      <p className="text-gray-600 max-w-2xl text-center mb-12">
        Have questions about our winter collection, sizing, or your order?
        We're here to help! Reach out anytime — we'll get back as soon as
        possible.
      </p>
      <div className="mb-10">
  <Link
    to="/support"
    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
  >
    View Full Support Details →
  </Link>
</div>    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">       
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <div className="flex items-start gap-4 mb-6">
            <FaPhoneAlt className="text-amber-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaEnvelope className="text-amber-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">support@winterwear.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-amber-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-600">
                WinterWear HQ, Near Pink Square Mall,  
                Jaipur, Rajasthan - 302001
              </p>
            </div>
          </div>
          <hr className="my-6" />
          <p className="text-gray-600">
            Our support team is available <b>Mon-Sat: 10 AM to 8 PM</b>.  
            Feel free to reach out for queries, returns, tracking, or anything else!
          </p>
        </div>  

           {/* form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

<input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-600"/>

<input
  type="email"
  placeholder="Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-600"/>

 <input
type="text"
placeholder="Subject"
  value={subject}
onChange={(e) => setSubject(e.target.value)}
 className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-600"/>

<textarea
  rows="5"
  placeholder="Your Message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-amber-600 resize-none"/>

            <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-14 max-w-6xl w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Find Us On Map</h3>
        <iframe
          className="w-full h-72 rounded-xl shadow-lg"
          src="https://maps.google.com/maps?q=jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy">            
          </iframe>
      </div>
    </section>
  );
}
