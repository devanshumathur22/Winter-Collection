import React from "react";
import { FaStar } from "react-icons/fa";
import jacket from "../assets/images/jacket.jpg"
import j10 from "../assets/images/j10.jpg"
import j5 from "../assets/images/j5.jpg"
import j6 from "../assets/images/j6.jpg"
import j7 from "../assets/images/j7.jpg"
import wc from "../assets/images/wool-coat.jpg"
import w2 from "../assets/images/w2.jpg"
import w3 from "../assets/images/w3.jpg"
import w4 from "../assets/images/w4.jpg"
import w5 from "../assets/images/w5.jpg"
import w6 from "../assets/images/w6.jpg"


function ReviewCard({ img, name, desc }) {
  return (
    <div  className="p-4 rounded-lg shadow hover:shadow-lg transition bg-white">
      <img src={img} className="w-full h-40 object-cover rounded-md" />
      <h2 className="font-bold text-lg mt-3">{name}</h2>

      <div className="flex text-yellow-500 text-xl my-1">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
      </div>

      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function AllReviews() { 
  const menReviews = [
    {
      img: {jacket},
      name: "Arjun Sharma",
      desc:
        "I recently purchased this winter jacket and the warmth level truly surprised me. "
        + "The inner lining is very soft and doesn’t irritate the skin. The stitching is strong, "
        + "and the zipper quality is heavy-duty. I used it during an early morning trip when the "
        + "temperature was around 4°C and it kept me comfortably warm. The fit is excellent and it "
        + "doesn’t feel bulky at all. Highly recommended for anyone looking for balanced warmth "
        + "and style."
    },
    {
      img: {j5},
      name: "Rohit Raj",
      desc:
        "The jacket exceeded my expectations. The fabric feels premium and blocks cold wind effectively. "
        +"The color does not fade even after multiple washes. I especially love the way it layers over "
        + "sweaters without feeling tight. Worth every penny."
    },
    {
      img: {j10},
      name: "Mohit Verma",
      desc:
        "A perfect winter essential! The texture is smooth, fitting is sharp, and it looks expensive. "
        + "The insulation is thick but breathable so you don’t feel sweaty indoors. I wore it daily "
        + "for 2 weeks and the shape stayed intact. Solid quality."
    },
    {
      img: {j5},
      name: "Sahil Singh",
      desc:
        "The jacket is extremely warm and stylish. It fits perfectly on shoulders and chest and still "
        + "allows free movement. The pockets are deep and useful during travel. Loved the overall feel."
    },
    {
      img: {j6},
      name: "Deepak Rathore",
      desc:
        "Super comfortable jacket. The wool blend is soft and gives a rich winter look. The comfort "
        + "level is top-notch. If you're into durable winter wear, go for it."
    },
    {
      img: {j7},
      name: "Kunal Khanna",
      desc:
        "Used this jacket during a mountain trip. It handled strong winds perfectly. The fit and "
        + "fabric quality are amazing. Definitely buying again from this brand."
    },
  ];
  const womenReviews = [
    {
      img: {wc},
      name: "Aarushi",
      desc:
        "I bought the wool coat for daily winter wear and it looks extremely classy. The fabric is "
        + "soft and premium, and the coat has a luxury shine. It keeps me warm even in chilly weather. "
        + "Perfect for office, outings, and winter dinners."
    },
    {
      img: {w4},
      name: "Meera",
      desc:
        "The coat feels elegant and expensive. The stitching is flawless and the inner lining is very "
        + "comfortable. The material keeps you warm without making the coat bulky. A must-buy for "
        + "women who want classy winterwear."
    },
    {
      img: {w3},
      name: "Heena",
      desc:
        "Great fitting, warm and lightweight. The color is beautiful and the coat looks exactly like "
        + "the pictures. Perfect winter styling piece."
    },
    {
      img: {w2},
      name: "Ishika",
      desc:
        "The coat is super soft and comfortable. The quality of wool is premium and the pockets are "
        + "very useful in winter. Would definitely recommend."
    },
    {
      img: {w5},
      name: "Kia",
      desc:
        "One of the best winter coats I have purchased. Stylish, warm, and premium looking. Perfect fit!"
    },
    {
      img: {w6},
      name: "Riya",
      desc:
        "Amazing coat! The wool quality is superb. I wore it on a trip and it was very warm. Premium finish!"
    },
  ];

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">  
      <h1 className="text-4xl font-bold text-center">Customer Reviews</h1>    
      <p className="text-gray-600 text-center max-w-4xl mx-auto mt-5 leading-7">
        {
          `This review section is built to provide real customer insights about our winter 
          collection including jackets, jeans, sweaters, hoodies, pullovers, cardigans, and 
          wool coats. Customers have shared their experience with warmth, durability, fabric 
          softness, color stability, stitching strength, size accuracy, wind protection, and 
          overall comfort. Whether you are looking for men’s or women’s winter wear, these reviews
          will help you make an informed decision about your purchase. We value customer feedback 
          as it helps us improve our products and services continuously.`
        }
      </p>    
      <h2 className="text-3xl font-bold mt-12 mb-4">Men's Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menReviews.map((item, index) => (
          <ReviewCard key={index} img={item.img} name={item.name} desc={item.desc} />
        ))}
      </div>
     
      <h2 className="text-3xl font-bold mt-16 mb-4">Women's Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {womenReviews.map((item, index) => (
          <ReviewCard key={index} img={item.img} name={item.name} desc={item.desc} />
        ))}
      </div>
    </section>
  );
}
