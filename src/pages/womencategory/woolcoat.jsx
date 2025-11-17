import React from "react";
import img1 from "../../assets/images/w1.jpg";
import img2 from "../../assets/images/w2.jpg";
import img3 from "../../assets/images/w3.jpg";
import img4 from "../../assets/images/w4.jpg";
import img5 from "../../assets/images/w5.jpg";
import img6 from "../../assets/images/w6.jpg";
import img7 from "../../assets/images/w7.jpg";
import img8 from "../../assets/images/w8.jpg";
export default function Woolcoats() {
  return (
    <section  className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold">Men's Wool Coats Collection</h1>
      <p className="text-gray-600 max-w-3xl font-semibold">
        Premium wool coats crafted for luxury winter wear. Warm, stylish, and
        perfect for both formal and casual winter outfits.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-6">
        <Card img={img1} title="Classic Wool Coat" desc="Timeless winter formal coat." />
        <Card img={img2} title="Long Overcoat" desc="Premium long wool style." />
        <Card img={img3} title="Short Wool Coat" desc="Modern short winter coat." />
        <Card img={img4} title="Brown Wool Coat" desc="Rich warm winter tone." />
        <Card img={img5} title="Luxury Cashmere Coat" desc="Ultra soft & premium feel." />
        <Card img={img6} title="Double Breasted Coat" desc="Classic winter fashion." />
        <Card img={img7} title="Urban Wool Coat" desc="Modern street-style winter coat." />
        <Card img={img8} title="Heavy Wool Coat" desc="Thick insulation for harsh winters." />
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
