import React, { useState, useEffect } from "react";
import a from "../assets/images/a.jpg";
import b from "../assets/images/b.jpg";
import c from "../assets/images/c.jpg";
import d from "../assets/images/d.jpg";
import e from "../assets/images/e.jpg";
import f from "../assets/images/f.jpg";
import thermal from "../assets/images/thermal.jpg";
import hooides from "../assets/images/Hoodies.jpg";
import sweaters from "../assets/images/sweaters.jpg";
import puff from "../assets/images/puff.jpg";
import sweatshirtts from "../assets/images/Sweatshirts.jpg";

const images = [a, b, c, d, e, f];
function StickyBuyBar({ product, sizes, onBuyNow, onAddToCart }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="backdrop-blur-sm bg-white/90 border-t shadow-xl rounded-t-2xl p-3 flex items-center gap-3">
          <img src={product.imgSrc}alt={product.title}
            className="w-14 h-14 object-cover rounded-md border"/>        
          <div className="flex-1">
            <p className="text-sm font-medium">{product.title}</p>
            <p className="text-gray-600 text-sm">
              {product.currency}
              {product.price}
            </p>
          </div>        
          <div className="flex gap-2">
            <button
              onClick={onAddToCart}
              className="px-3 py-2 border cursor-pointer rounded-md text-sm">
              Add to Cart
            </button>
            <button
              onClick={onBuyNow}
              className="px-4 py-2 bg-black text-white cursor-pointer rounded-md text-sm font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function ProductDetails() {
  const [current, setCurrent] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      2000
    );
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const section = document.getElementById("product");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowSticky(true);
        } else {
          setShowSticky(false);
        }
      },
      { threshold: 0.2 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="product"
      className="flex flex-col justify-center items-center px-6 py-4 pb-28 shadow">
      <h2 className="text-3xl font-serif">Product Details</h2>
      <p className="text-center mt-2 max-w-3xl">
        Stay warm and stylish this winter with our premium range of winter
        essentials. Crafted using high-quality fabrics and advanced insulation
        techniques, each product in our collection is designed to offer maximum
        comfort, breathability, and long-lasting warmth. From soft knitted
        sweaters and cozy hoodies to lightweight puffers, durable jackets, and
        stretchable thermals, every piece ensures superior heat retention
        without compromising on style. Whether you're traveling, layering up for
        daily wear, or stepping out in chilly weather, our winter collection
        provides the perfect balance of comfort, protection, and modern fashion.
      </p>     
      <div id="Gallery"className="relative w-full h-[300px] sm:h-[500px] overflow-hidden rounded-xl shadow-lg cursor-pointer bg-black mt-4"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"}`}>
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-contain"/>
          </div>
        ))}
        <button
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-yellow-700">
          ❮
        </button>

        <button
          onClick={() => setCurrent((current + 1) % images.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-yellow-700">
          ❯
        </button>
      </div>     
      <div className="grid grid-cols-3 gap-8 px-6 py-4 max-w-6xl shadow cursor-pointer transition-shadow mt-6">       
        <div>
          <img src={a} className="w-full h-64 object-cover rounded-lg border" />
          <h3 className="mt-2 text-lg font-medium">Winter Jacket Details</h3>
          <p className="text-gray-600 max-w-2xl">
            Our Winter Jackets are engineered to handle extreme cold using a
            durable nylon outer shell, warm synthetic insulation, and breathable
            inner panels.
          </p>
          <li className="mt-2 font-semibold">Fabric Composition</li>
          <li>100% Nylon Outer Shell</li>
          <li>Polyester Inner Lining</li>
          <li>Premium Synthetic Insulation</li>
          <li className="mt-2 font-semibold">Key Features</li>
          <li>Windproof & Waterproof</li>
          <li>Lightweight & Warm</li>
          <li>Deep Side Pockets</li>
        </div>

       <div className="">
  <img src={puff} className="w-full h-64 object-cover rounded-lg border" />
  <h3 className="mt-2 text-lg font-medium">Puffer Jacket Details</h3>
  <p className="text-gray-600 max-w-2xl">
    Designed for harsh winter conditions with lightweight insulation and superior warmth.
  </p>
  <li className="mt-2 font-semibold">Fabric</li>
  <li>100% Polyester Ripstop</li>
  <li>Eco-friendly Polyfill Padding</li>
  <li>Quilted Stitching for Extra Insulation</li>

  <li className="mt-2 font-semibold">Performance</li>
  <li>Keeps warmth between –5°C to –15°C</li>
  <li>Feather-light weight</li>
  <li>Moisture-wicking inner layer</li> 
</div>

        
        <div>
          <img src={sweaters} className="w-full h-64 object-cover rounded-lg border" />
          <h3 className="mt-2 text-lg font-medium">Sweater Details</h3>
          <p className="text-gray-600 max-w-2xl">
            Soft and warm wool–acrylic blend with a no-itch design.
          </p>
          <li className="mt-2 font-semibold">Fabric</li>
          <li>70% Acrylic</li>
          <li>30% Wool</li>

          <li className="mt-2 font-semibold">Why This Is Premium</li>
  <li>Ultra-soft hand feel</li>
  <li>Stretchable ribbed neck & hem</li>
  <li>No-itch wool blend</li>
  <li>Heat-retention knit pattern</li>
        </div>
        
        <div>
          <img src={hooides} className="w-full h-64 object-cover rounded-lg border" />
          <h3 className="mt-2 text-lg font-medium">Hoodie Details</h3>
          <p className="text-gray-600 max-w-2xl">
            Soft fleece-lined hoodie for everyday comfort.
          </p>
          <li className="mt-2 font-semibold">Material</li>
          <li>80% Cotton</li>
          <li>20% Polyester</li>
          <li className="mt-2 font-semibold">Features</li>
          <li>Fleece-lined interior</li>
          <li>Adjustable drawstring hood</li>
          <li>Kangaroo front pocket</li>
        </div>
        
        <div>
          <img src={sweatshirtts} className="w-full h-64 object-cover rounded-lg border" />
          <h3 className="mt-2 text-lg font-medium">Sweatshirt Details</h3>
          <p className="text-gray-600 max-w-2xl">
            French Terry cotton with soft fleece interior.
          </p>
          <li className="mt-2 font-semibold">Fabric</li>          
          <li>French Terry Cotton</li>
          <li>Pre-shrunk & anti-fade</li>
          <li className="mt-2 font-semibold">Comfort Level</li>
          <li>Smooth on skin</li>
          <li>Super-soft fleece inside</li>
          <li>Perfect for long winter days</li>
         </div>

        <div>
          <img src={thermal} className="w-full h-64 object-cover rounded-lg border" />
          <h3 className="mt-2 text-lg font-medium">Thermal Wear Details</h3>
          <p className="text-gray-600 max-w-2xl">
            High heat-retention cotton blend perfect for layering.
          </p>
          <li className="mt-2 font-semibold">Fabric</li>
          <li>95% Cotton</li>
          <li>5% Elastane</li>
          <li className="mt-2 font-semibold">Benefits</li>
          <li>Excellent heat retention</li>
          <li>Stretchable fit for mobility</li>
          <li>Lightweight & breathable</li>
        </div>
      </div>
      {showSticky && (
        <StickyBuyBar
          product={{
            id: "winter-collection",
            title: "Winter Collection",
            price: 2499,
            currency: "₹",
            imgSrc: a,
          }}
          sizes={["S", "M", "L", "XL"]}
          onBuyNow={(payload) => console.log("Buy Now:", payload)}
          onAddToCart={(payload) => console.log("Add to Cart:", payload)}
        />
      )}
    </section>
  );
}
