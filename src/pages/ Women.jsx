import React from 'react'
import { Link } from "react-router-dom";
import cableknite from "../assets/images/Cable Knit.jpg"
import pullover from "../assets/images/pullover.jpg"
import sweatershirt from "../assets/images/sweatershirts.jpg"
import woolcoat from "../assets/images/wool-coat.jpg"
export default function  Women() {
  return (
  <section id='women' className='flex flex-col justify-center items-center px-6 py-4 '> 
    <h2 className='text-2xl font-serif'>WOMEN's Wear</h2>                               
    <h3 className='text-xl font-serif mt-6'>FEATURED CATEGORIES </h3>
   <div className='grid grid-cols-4 p-6 max-w-6xl  gap-6  rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer'> 
        <Link to="/women/cableknite" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>
            <img src={cableknite} alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'>Cable-Knite Cardigan</h3>
            </Link>
        <Link to="/women/pullover" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>            
            <img src={pullover} alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'>Pullover</h3>
        </Link>
        <Link to="/women/sweatershirts" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>
            <img src={sweatershirt}alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'>SweaterShirts</h3>
        </Link>
        <Link to="/women/woolcoat" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>
            <img src={woolcoat} alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'> Wool-Coats</h3>
        </Link>          
    </div>
  </section>
  )
}
