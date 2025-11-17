import { Section } from 'lucide-react'
import React from 'react'
import sweaterkids from "../assets/images/sweaterkids.jpg"
import hoodiekids from "../assets/images/hoodiekids.jpg"
import fashionkid from "../assets/images/fashionkid.jpg"
import jacketkid from "../assets/images/jacketkid.jpg"
export default function  Kids() {
  return (
   <section id='kids' className='flex flex-col justify-center items-center px-6 py-4 '> 
      <h2 className='text-2xl font-serif'>KID's Wear</h2>
      <h3 className='text-xl font-serif mt-2'>FEATURED CATEGORIES </h3>
      <div className='grid grid-cols-4 p-6 max-w-6xl  gap-6  rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer'> 
          <div className='flex flex-col justify-center items-center hover:scale-105 transition duration-300 '>
              <img src={sweaterkids} alt="" className='w-64 h-80 object-cover '/>
              <h3 className='text-xl font-serif mt-2'>Sweaters</h3>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-105 transition duration-300 '>
              <img src={hoodiekids} alt="" className='w-64 h-80 object-cover '/>
              <h3 className='text-xl font-serif mt-2'>Hoodies</h3>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-105 transition duration-300 '>    
              <img src={fashionkid} alt="" className='w-64 h-80 object-cover '/>
              <h3 className='text-xl font-serif mt-2'>Kids Fashion</h3>
          </div>
          <div className='flex flex-col justify-center items-center hover:scale-105 transition duration-300 '>
              <img src={jacketkid} alt="" className='w-64 h-80 object-cover '/>
              <h3 className='text-xl font-serif mt-2'>Jackets</h3>
          </div>          
      </div>
      </section>
  )
}
