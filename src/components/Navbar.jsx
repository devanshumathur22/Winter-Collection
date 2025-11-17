import React, { useContext } from 'react'
import logo from "../assets/images/1.jpg"
import { HashLink } from "react-router-hash-link";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
 
    const [open, setOpen] = React.useState(false);
    const navbar = [
        {name: "Home", link: "/#home"},
        {name: "Men", link: "/#men"},
        {name: "Women", link: "/#women"},
        {name: "Kids", link: "/#kids"},
        {name: "Contact", link: "/#contact"},
        {name: "Reviews", link: "/#review"},
    ];
  return (
    <nav id="" className='flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow px-4 md:px-8'>   
      <div className='flex items-center'>
        <img className='rounded-full w-20 h-20' src={logo} alt="" />
      </div>      
      <div className="hidden md:flex items-center gap-6">   
        <ul className='flex items-center'>
          {navbar.map((navItem, index) => (
            <li key={index} className='mx-4'>
               <HashLink smooth to={navItem.link} className="text-lg hover:text-amber-700 font-serif">
                 {navItem.name}
               </HashLink>
            </li>
          ))}
          <FaShoppingCart className='cursor-pointer' size={24} />
        </ul>
      </div>
     
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
      </div>     
      {open && (
        <ul className="flex flex-col items-center gap-6 md:hidden py-4">          
          <button 
            onClick={toggleTheme}
            className="text-3xl mb-4">           
          </button>

          {navbar.map((item, index) => (
            <li key={index}>
              <HashLink 
                smooth 
                to={item.link}
                className="text-xl hover:text-amber-700"
                onClick={() => setOpen(false)}>
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>
      )}
   </nav>  
  )
}
