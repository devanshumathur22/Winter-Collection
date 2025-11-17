import React from "react";
import img1 from "../../assets/images/jn1.jpg";
import img2 from "../../assets/images/jn2.jpg";
import img3 from "../../assets/images/jn3.jpg";
import img4 from "../../assets/images/jn4.jpg";
import img5 from "../../assets/images/jn5.jpg";
import img6 from "../../assets/images/jn6.jpg";
import img7 from "../../assets/images/jn7.jpg";
import img8 from "../../assets/images/jn8.jpg";
import img9 from "../../assets/images/jn9.jpg";
import img10 from "../../assets/images/jn10.jpg";
import img11 from "../../assets/images/jn11.jpg";
import img12 from "../../assets/images/jn12.jpg";
import img13 from "../../assets/images/jn13.jpg";
import img14 from "../../assets/images/jn14.jpg";
import img15 from "../../assets/images/jn15.jpg";
import img16 from "../../assets/images/jn16.jpg";
export default function Jeans() {
  return (
    <section className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold">Men's Jeans Collection</h1>
      <p className="text-gray-600 max-w-3xl font-semibold">
        Stylish and comfortable jeans designed for daily wear. Includes slim-fit,
        regular-fit, stretchable, ripped, and modern denim styles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-6">

        <Card img={img1} title="Slim Fit Jeans" desc="Slim & stylish modern denim fit." />
        <Card img={img2} title="Classic Blue Jeans" desc="Everyday comfort + classic style." />
        <Card img={img3} title="Black Stretch Jeans" desc="Soft, flexible, stretchable denim." />
        <Card img={img4} title="Ripped Street Jeans" desc="Trendy ripped winter denim style." />       
        <Card img={img5} title="Straight Fit Jeans" desc="Comfortable loose everyday fit." />
        <Card img={img6} title="Light Wash Denim" desc="Soft washed-feel premium jeans." />
        <Card img={img7} title="Dark Blue Jeans" desc="Perfect for both casual & formal." />
        <Card img={img8} title="Tapered Fit Jeans" desc="Modern tapered comfortable fit." />
        <Card img={img9} title="Premium Raw Denim" desc="Strong raw denim for long-lasting use." />
        <Card img={img10} title="Relaxed Fit Jeans" desc="Loose & highly comfortable fit." />
        <Card img={img11} title="Streetwear Cargo Jeans" desc="Trendy multi-pocket denim style." />
        <Card img={img12} title="Vintage Brown Jeans" desc="Old-school denim winter vibes." />
        <Card img={img13} title="Heavyweight Denim" desc="Durable fabric for winter season." />
        <Card img={img14} title="Soft Touch Jeans" desc="Feather-soft denim material." />
        <Card img={img15} title="Daily Wear Jeans" desc="Perfect classic daily jeans." />
        <Card img={img16} title="Ice Wash Jeans" desc="Cool washed denim modern look." />
      </div>
    </section>
  );
}
function Sizes() {
  return (
    <div className="flex gap-2 mt-3">
      {["28", "30", "32", "34", "36"].map((s, i) => (
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
