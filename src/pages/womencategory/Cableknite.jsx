import React from "react";
import img1 from "../../assets/images/cb1.jpg";
import img2 from "../../assets/images/cb2.jpg";
import img3 from "../../assets/images/cb3.jpg";
import img4 from "../../assets/images/cb4.jpg";
import img5 from "../../assets/images/cb5.jpg";
import img6 from "../../assets/images/cb6.jpg";
import img7 from "../../assets/images/cb7.jpg";
import img8 from "../../assets/images/cb8.jpg";
export default function CableKnits() {
  return (
    <section  className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold">Men's Cable-Knit Cardigans</h1>
      <p className="text-gray-600 max-w-3xl font-semibold">
        Premium cable-knit cardigans crafted for winter warmth and classic
        textured styling. Soft wool blends, ribbed patterns, and cozy fits.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-6">
        <Card img={img1} title="Classic Cable-Knit Cardigan" desc="Traditional design with cozy fit." />
        <Card img={img2} title="Thick Cable Pattern" desc="Dense knit for deep winter." />
        <Card img={img3} title="Soft Ribbed Cardigan" desc="Premium softness for daily wear." />
        <Card img={img4} title="Modern Cable Style" desc="Modern take on classic winter knit." />
        <Card img={img5} title="Vintage Cable Cardigan" desc="Old-school charm with premium warmth." />
        <Card img={img6} title="Heavy Wool Cardigan" desc="Maximum insulation for cold weather." />
        <Card img={img7} title="Casual Cable Fit" desc="Perfect for daily winter use." />
        <Card img={img8} title="Urban Cable Style" desc="Fashion-forward cable-knit design." />
      </div>
    </section>
  );
}
function Sizes() {
  return (
    <div className="flex gap-2 mt-3">
      {["S", "M", "L", "XL"].map((s, i) => (
        <span key={i} className="px-3 py-1 border rounded-md text-sm hover:bg-black hover:text-white transition cursor-pointer">
          {s}
        </span>
      ))}
    </div>
  );
}
function Buttons() {
  return (
    <div className="mt-4 flex items-center gap-2">
      <button className="border px-2 rounded-b-lg hover:bg-black hover:text-white transition">Add to Cart</button>
      <button className="border px-2 rounded-b-lg hover:bg-black hover:text-white transition">Buy Now 🛒</button>
    </div>
  );
}
function Card({ img, title, desc }) {
  return (
    <div className="rounded-xl p-4 shadow-sm hover:shadow-lg transition">
      <img src={img} className="w-full h-56 object-cover rounded-lg" />
      <h2 className="mt-3 text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">{desc}</p>
      <Sizes />
      <Buttons />
    </div>
  );
}
