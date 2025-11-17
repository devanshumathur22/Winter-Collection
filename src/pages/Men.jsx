import React from 'react'
import { Link } from "react-router-dom";
import sweater from "../assets/images/sweater.jpg"
import hoodie from "../assets/images/hoodie.jpg"
import jeans from "../assets/images/jeans.jpg"
import jacket from "../assets/images/jacket.jpg"

export default function Men() {
  return (
    <section id='men' className='flex flex-col justify-center items-center px-6 py-4 '> 
    <h2 className='text-2xl font-serif'>MEN's Wear</h2>
    <h3 className='text-xl font-serif mt-2'>FEATURED CATEGORIES </h3>
    <div className='grid grid-cols-4 p-6 max-w-6xl  gap-6  rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer'> 

          <Link to="/men/sweaters" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>
            <img src={sweater} alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'>Sweaters</h3>
        </Link>      

          <Link to="/men/hoodies" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>
            <img src={hoodie} alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'>Hoodies</h3>
        </Link>

          <Link to="/men/jeans" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>    
            <img src={jeans} alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'>Jeans</h3>
            </Link>

          <Link to="/men/jackets" className='flex flex-col justify-center items-center hover:scale-105 transition duration-300'>
            <img src={jacket} alt="" className='w-64 h-80 object-cover '/>
            <h3 className='text-xl font-serif mt-2'>Jackets</h3>
        </Link>        
    </div>
    </section>
  )
}
