import React from "react";
import img1 from "../../assets/images/h1.jpg";
import img2 from "../../assets/images/h2.jpg";
import img3 from "../../assets/images/h3.jpg";
import img4 from "../../assets/images/h4.jpg";
import img5 from "../../assets/images/h5.jpg";
import img6 from "../../assets/images/h6.jpg";
import img7 from "../../assets/images/h7.jpg";
import img8 from "../../assets/images/h8.jpg";
import img9 from "../../assets/images/h9.jpg";
import img10 from "../../assets/images/h10.jpg";
import img11 from "../../assets/images/h11.jpg";
import img12 from "../../assets/images/h12.jpg";
import img13 from "../../assets/images/h13.jpg";
import img14 from "../../assets/images/h14.jpg";
import img15 from "../../assets/images/h15.jpg";
import img16 from "../../assets/images/h16.jpg";

export default function Hoodies() {
  return (
    <section className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold">Men's Hoodies Collection</h1>
      <p className="text-gray-600 max-w-3xl font-semibold">
        Premium men’s hoodies designed for ultimate comfort, warmth, and modern
        streetwear vibes. Cozy fleece lining, soft cotton fabric, and stylish
        winter-ready fits.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-6">        
        <div className="rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img1} className="w-full h-56 object-cover rounded-lg" />
          <h2 className="mt-3 text-lg font-semibold">Classic Fleece Hoodie</h2>
          <p className="text-gray-600 text-sm">Soft fleece inside for warm comfort.</p>
          <Sizes />
          <Buttons />
        </div>

        <div className="rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img2} className="w-full h-56 object-cover rounded-lg" />
          <h2 className="mt-3 text-lg font-semibold">Oversized Street Hoodie</h2>
          <p className="text-gray-600 text-sm">Trendy oversized fit for urban look.</p>
          <Sizes />
          <Buttons />
        </div>

        <div className="rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img3} className="w-full h-56 object-cover rounded-lg" />
          <h2 className="mt-3 text-lg font-semibold">Daily Casual Hoodie</h2>
          <p className="text-gray-600 text-sm">Perfect for everyday winter use.</p>
          <Sizes />
          <Buttons />
        </div>

        <div className="rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img4} className="w-full h-56 object-cover rounded-lg" />
          <h2 className="mt-3 text-lg font-semibold">Premium Cotton Hoodie</h2>
          <p className="text-gray-600 text-sm">Breathable cotton with warm lining.</p>
          <Sizes />
          <Buttons />
        </div>

        <Card img={img5} title="Zipper Hoodie" desc="Smooth zip and soft fleece for winter." />
        <Card img={img6} title="Heavyweight Hoodie" desc="Thick build perfect for cold nights." />
        <Card img={img7} title="Color Block Hoodie" desc="Trendy two-tone winter style." />
        <Card img={img8} title="Sports Fit Hoodie" desc="Flexible & breathable activewear." />
        <Card img={img9} title="Classic Black Hoodie" desc="Minimalist, stylish and warm." />
        <Card img={img10} title="Warm Winter Hoodie" desc="Extra insulated for freezing temp." />
        <Card img={img11} title="Soft Touch Hoodie" desc="Gentle cotton ideal for long wear." />
        <Card img={img12} title="Urban Street Hoodie" desc="Streetwear hoodie with premium fit." />
        <Card img={img13} title="Fur Lined Hoodie" desc="Ultra warm fur lining inside." />
        <Card img={img14} title="Lightweight Hoodie" desc="Soft & breathable for daily use." />
        <Card img={img15} title="Daily Essential Hoodie" desc="Perfect basic hoodie for winter." />
        <Card img={img16} title="Classic Pullover Hoodie" desc="Timeless hoodie with comfort fit." />
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
          className="px-3 py-1 border rounded-md text-sm hover:bg-black cursor-pointer hover:text-white transition">
          {s}
        </span>
      ))}
    </div>
  );
}
function Buttons() {
  return (
    <div className="mt-4 flex items-center gap-2">
      <button className="border px-2 rounded-b-lg hover:bg-black hover:text-white cursor-pointer transition">
        Add to Cart
      </button>
      <button className="border px-2 rounded-b-lg hover:bg-black hover:text-white cursor-pointer transition">
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


