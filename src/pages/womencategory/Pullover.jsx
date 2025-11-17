import React from "react";
import img1 from "../../assets/images/p1.jpg";
import img2 from "../../assets/images/p2.jpg";
import img3 from "../../assets/images/p3.jpg";
import img4 from "../../assets/images/p4.jpg";
import img5 from "../../assets/images/p5.jpg";
import img6 from "../../assets/images/p6.jpg";
import img7 from "../../assets/images/p7.jpg";
import img8 from "../../assets/images/p8.jpg";
export default function Pullover() {
  return (
    <section className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold">Men's Pullover Collection</h1>
      <p className="text-gray-600 max-w-3xl font-semibold">
        Soft, warm, and stylish pullovers designed for everyday winter comfort.
        Lightweight, thick knit, ribbed and fleece options.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-6">
        <Card img={img1} title="Classic Winter Pullover" desc="Warm & soft for daily wear." />
        <Card img={img2} title="Slim Fit Pullover" desc="Comfort fit with stretch." />
        <Card img={img3} title="Premium Wool Pullover" desc="Luxury soft wool texture." />
        <Card img={img4} title="Ribbed Knit Pullover" desc="Stylish ribbed winter design." />
        <Card img={img5} title="Urban Pullover" desc="Perfect streetwear winter fashion." />
        <Card img={img6} title="Soft Touch Pullover" desc="Gentle fabric for comfort." />
        <Card img={img7} title="Daily Knit Pullover" desc="Best for everyday winter use." />
        <Card img={img8} title="Heavy Knit Pullover" desc="Extra warm for cold nights." />
      </div>
    </section>
  );
}
function Sizes() {
  return (
    <div  className="flex gap-2 mt-3">
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
