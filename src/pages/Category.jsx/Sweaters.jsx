import React from "react";
import img1 from "../../assets/images/2.jpg";
import img2 from "../../assets/images/3.jpg";
import img3 from "../../assets/images/4.jpg";
import img4 from "../../assets/images/5.jpg";   
import img5 from "../../assets/images/6.jpg";
import img6 from "../../assets/images/7.jpg";
import img7 from "../../assets/images/8.jpg";
import img8 from "../../assets/images/9.jpg";
import img9 from "../../assets/images/10.jpg";
import img10 from "../../assets/images/11.jpg";
import img11 from "../../assets/images/12.jpg";
import img12 from "../../assets/images/13.jpg";
import img13 from "../../assets/images/14.jpg";
import img14 from "../../assets/images/15.jpg";
import img15 from "../../assets/images/16.jpg";
import img16 from "../../assets/images/17.jpg";
export default function Sweaters() {
  return ( 
      <section className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold ">Men's Sweaters Collection</h1>
      <p className="text-gray-600 max-w-3xl font-semibold ">
        Premium-quality winter sweaters designed for warmth, comfort, and
        everyday style. Soft wool blends, acrylic knits, and ribbed finishes
        perfect for US winter weather.
      </p>           
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  max-w-6xl px-6">

        <div className=" rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img1} className="w-full h-56 object-cover rounded-lg " />
          <h2 className="mt-3 text-lg font-semibold">Classic Wool Sweater</h2>
          <p className="text-gray-600 text-sm">Soft wool blend ideal for cold weather.</p>
          <Sizes />
          <Buttons />
        </div>
       
        <div className=" rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img2} className="w-full h-56 object-cover rounded-lg " />
          <h2 className="mt-3 text-lg font-semibold">High Neck Knit Sweater</h2>
          <p className="text-gray-600 text-sm">Warm thick knit with soft lining.</p>
          <Sizes />
          <Buttons />
        </div>
        
        <div className="rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img3} className="w-full h-56 object-cover rounded-lg " />
          <h2 className="mt-3 text-lg font-semibold">Daily Casual Sweater</h2>
          <p className="text-gray-600 text-sm">Perfect comfort for everyday use.</p>
          <Sizes />
          <Buttons />
        </div>
       
        <div className="rounded-lg p-4 shadow-sm hover:shadow-lg transition">
          <img src={img4} className="w-full h-56 object-cover rounded-lg " />
          <h2 className="mt-3 text-lg font-semibold">Designer Pattern Sweater</h2>
          <p className="text-gray-600 text-sm">Modern design with premium knit.</p>
          <Sizes />
          <Buttons />
        </div>
      
        <Card img={img5} title="Premium Ribbed Sweater" desc="High-grade ribbed knit for extra warmth." />
        <Card img={img6} title="Fleece Lined Sweater" desc="Ultra-soft fleece interior for maximum warmth." />
        <Card img={img7} title="Striped Winter Sweater" desc="Stylish striped pattern with thick wool." />
        <Card img={img8} title="Vintage Knit Sweater" desc="Classic look with modern comfort fit." />
        <Card img={img9} title="Slim Fit Sweater" desc="Perfect stretch and comfort for all-day wear." />
        <Card img={img10} title="Dense Knit Sweater" desc="Extra insulation for deep winter conditions." />
        <Card img={img11} title="Soft Touch Sweater" desc="Gentle fabric ideal for sensitive skin." />
        <Card img={img12} title="Urban Style Sweater" desc="Modern streetwear winter fashion." />
        <Card img={img13} title="Winter Royal Sweater" desc="Premium quality with luxury texture." />
        <Card img={img14} title="Heavyweight Wool Sweater" desc="Max warmth for extreme US winters." />
        <Card img={img15} title="Casual Knit Pullover" desc="Light and breathable for daily use." />
        <Card img={img16} title="Classic Cable Sweater" desc="Thick cable knit pattern for style + warmth." />      </div> 
      </section>
  );
}
function Sizes() {
  return (
    <div className="flex gap-2 mt-3">
      {["S", "M", "L", "XL"].map((s, i) => (
        <span key={i} className="px-3 py-1 border rounded-md text-sm hover:bg-black cursor-pointer hover:text-white transition">
          {s}
        </span>
      ))}
    </div>
  );
}
function Buttons() {
  return (
    <div className="mt-4 flex items-center gap-2">
      <button className="border px-2  rounded-b-lg hover:bg-black hover:text-white cursor-pointer transition flex items-center gap-2">
        Add to Cart
      </button>
      <button className="border px-2  rounded-b-lg hover:bg-black hover:text-white cursor-pointer transition flex items-center gap-2">
        Buy Now 🛒
      </button>
    </div>
  );
}
function Card({ img, title, desc }) {
  return (
    <div className=" rounded-xl p-4 shadow-sm hover:shadow-lg transition">
      <img src={img} className="w-full h-56 object-cover rounded-lg " />
      <h2 className="mt-3 text-lg font-semibold">{title}</h2>
      <p className="text-gray-600 text-sm">{desc}</p>
      <Sizes />
      <Buttons />
    </div>
  );
}
