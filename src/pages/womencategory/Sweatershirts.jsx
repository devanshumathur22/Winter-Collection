import React from "react";
import img1 from "../../assets/images/ss1.jpg";
import img2 from "../../assets/images/ss2.jpg";
import img3 from "../../assets/images/ss3.jpg";
import img4 from "../../assets/images/ss4.jpg";
import img5 from "../../assets/images/ss5.jpg";
import img6 from "../../assets/images/ss6.jpg";
import img7 from "../../assets/images/ss7.jpg";
import img8 from "../../assets/images/ss8.jpg";

export default function SweaterShirts() {
  return (
    <section  className="flex flex-col justify-center items-center px-6 py-10 gap-6">
      <h1 className="text-4xl font-bold">Men's Sweater Shirts Collection</h1>
      <p className="text-gray-600 max-w-3xl font-semibold">
        Stylish sweater-shirts with soft lining, warm material, and trendy cuts.
        A perfect blend of sweaters + shirts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl px-6">
        <Card img={img1} title="Classic Sweater Shirt" desc="Soft and stylish winter shirt." />
        <Card img={img2} title="Premium Knit Shirt" desc="Warm knit with shirt collar." />
        <Card img={img3} title="Slim Fit Sweater Shirt" desc="Perfect winter semi-formal." />
        <Card img={img4} title="Casual Winter Shirt" desc="Daily wear warm shirt." />
        <Card img={img5} title="Soft Lining Shirt" desc="Comfortable fleece inside." />
        <Card img={img6} title="Urban Sweater Shirt" desc="Modern streetwear look." />
        <Card img={img7} title="Checked Pattern Shirt" desc="Sweater-warmth + shirt-pattern." />
        <Card img={img8} title="Heavy Knit Shirt" desc="Thick design for deep winter." />
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
