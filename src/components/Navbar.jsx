import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import LinksData from './Home/LinksData';
import { LuCalendarCheck } from "react-icons/lu";
import { RiMenu5Fill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

import logo from "../assets/navLogo.webp"
const Navbar = () => {
  const [Active, setActive] = useState(true)

  return <>
    <div className='fixed top-0 left-0 right-0 z-50 w-full  md:h-[96px] bg-white '>
      <div className="container max-sm:px-5 md:flex justify-center lg:justify-between items-center m-auto h-full">
        <div className='hidden lg:flex items-center gap-2'>
          <span className='text-[#b0583f]'><FaPhoneAlt/></span>
          <span className='text-[18px] font-bold'>01033720618</span>
        </div>
        <div className='md:block hidden'>
          <LinksData/>
        </div>
        <div className='hidden lg:flex  gap-2 items-center justify-center'>
          <span className='text-[#b0583f] text-[22px]'><LuCalendarCheck/></span>
           Book Your Stay
        </div>
        <div className='flex justify-between items-center md:hidden w-full py-5'>
          <img src={logo} alt='logo' className='w-32'  />
          {Active ? <RiMenu5Fill  className='text-[26px] cursor-pointer'  onClick={()=>setActive(!Active)} /> :  <GrClose  className='text-2xl cursor-pointer'  onClick={()=>setActive(!Active)} />}
        </div>
        {Active ? <div className='hidden mt-5 opacity-0 transition'>
          <LinksData/>
        </div> : 
        <div className='block md:hidden mt-5 opacity-1 transition'>
          <LinksData/>
        </div>}
      </div>
    </div>
  </>
  
}

export default Navbar