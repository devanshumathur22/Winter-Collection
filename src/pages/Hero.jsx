import React from 'react'
import heroImage from "../assets/images/background.jpg"
export default function Hero() {
  return (
    <section id='home'
      className='relative h-screen w-full bg-cover bg-center flex items-center justify-between '
      style={{ backgroundImage: `url(${heroImage})` }}>      
      <div className="absolute inset-0 bg-black/40"></div>      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h2 className='text-3xl text-white font-bold px-18 mt-24 '>EXPLORE THE <br /> US WINTER <br />COLLECTION</h2> 
         <button className='text-white rounded-full mt-4 px-4 py-2 bg-red-500 cursor-pointer hover:bg-yellow-600' >SHOP NOW</button>      
      </div>       
    </section>    
  )
}
