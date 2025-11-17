import React from "react";
import img1 from "../../assets/images/j1.jpg";
import img2 from "../../assets/images/j2.jpg";
import img3 from "../../assets/images/j3.jpg";
import img4 from "../../assets/images/j4.jpg";
import img5 from "../../assets/images/j5.jpg";
import img6 from "../../assets/images/j6.jpg";
import img7 from "../../assets/images/j7.jpg";
import img8 from "../../assets/images/j8.jpg";
import img9 from "../../assets/images/j9.jpg";
import img10 from "../../assets/images/j10.jpg";
import img11 from "../../assets/images/j11.jpg";
import img12 from "../../assets/images/j12.jpg";
import img13 from "../../assets/images/j13.jpg";
import img14 from "../../assets/images/j14.jpg";
import img15 from "../../assets/images/j15.jpg";
import img16 from "../../assets/images/j16.jpg";

export default function Jackets() {
  return (
    <section className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold">Men's Jackets Collection</h1>
      <p className="text-gray-600 max-w-3xl font-semibold">
        Premium-quality winter jackets designed for extreme warmth, durability,
        and modern outdoor fashion. Includes puffer, leather, bomber, and
        fleece-lined jackets perfect for winter.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-6">
        
        <Card img={img1} title="Classic Leather Jacket" desc="Genuine leather for premium look." />
        <Card img={img2} title="Winter Puffer Jacket" desc="Super warm and lightweight puffer." />
        <Card img={img3} title="Fleece Lined Jacket" desc="Ultra warm fleece inner lining." />
        <Card img={img4} title="Street Bomber Jacket" desc="Trendy, stylish and warm bomber fit." />
        <Card img={img5} title="Slim Fit Jacket" desc="Perfect tailored fit for all-day wear." />
        <Card img={img6} title="Hooded Winter Jacket" desc="Attached hood for extra wind protection." />
        <Card img={img7} title="Denim Winter Jacket" desc="Warm fleece denim winter style." />
        <Card img={img8} title="Windproof Shell Jacket" desc="Best for travel and outdoor rides." />
        <Card img={img9} title="Thermal Jacket" desc="Ultimate insulation for harsh winters." />
        <Card img={img10} title="Vintage Brown Jacket" desc="Classic retro winter jacket." />
        <Card img={img11} title="Motorbike Rider Jacket" desc="Heavy-duty protective winter jacket." />
        <Card img={img12} title="Premium Wool Jacket" desc="Soft wool blend with warm touch." />
        <Card img={img13} title="Airforce Bomber Jacket" desc="Military-style bomber comfort." />
        <Card img={img14} title="Rainproof Jacket" desc="Water-resistant & perfect for drizzle." />
        <Card img={img15} title="Casual Zip Jacket" desc="Simple and stylish everyday jacket." />
        <Card img={img16} title="Heavy Duty Parka" desc="Deep winter parka with fur hood." />
      </div>
    </section>
  );
}
function Sizes() {
  return (
    <div className="flex gap-2 mt-3">
      {["S", "M", "L", "XL"].map((s, i) => (
        <span
          key={i}
          className="px-3 py-1 border rounded-md text-sm hover:bg-black cursor-pointer hover:text-white transition"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
function Buttons() {
  return (
    <div className="mt-4 flex items-center gap-2">
      <button className="border px-2 rounded-b-lg hover:bg-black hover:text-white transition">
        Add to Cart
      </button>
      <button className="border px-2 rounded-b-lg hover:bg-black hover:text-white transition">
        Buy Now 🛒
      </button>
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
