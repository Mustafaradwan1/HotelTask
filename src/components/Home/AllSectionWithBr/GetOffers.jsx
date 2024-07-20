import React from 'react'
import Header from './Header'
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import holiday from "../../../assets/holiday.jpg";
import holiday1 from "../../../assets/holiday1.jpg";
import holiday2 from "../../../assets/holiday2.jpg";
import holiday3 from "../../../assets/holiday3.jpg";
import holiday4 from "../../../assets/holiday4.jpg";

const GetOffers = () => {
  return (
    <div className='bg-[#f4f1ed] pt-[90px] pb-[30px] '>
        <div className="container relative z-20">
          <div>
          </div>
          <div className='w-[55%] pb-10 leading-none m-auto'><Header h2={'Get the amazing offers into your inbox!'} p={''} /></div>
          <div className='border   border-gray-400 lg:w-1/2 m-auto h-14 rounded-full bg-white px-5 flex justify-between items-center'>
    <input type='email' placeholder='Enter Your Email Address' className='flex-1 outline-none rounded-full h-full' />
    <button className='flex gap-2 items-center'> <span><MdEmail/></span> Subscribe</button>
          </div>
          <p className='text-center text-[18px] text-[#817f7c] mt-7 mb-16'>We are committed to protecting your privacy policy.</p>
          <div className=' grid-cols-3 grid lg:grid-cols-5 gap-3'>
    <div className='relative cursor-pointer group'>
        <img src={holiday} alt='' />
        <div className='absolute top-0 w-full h-full bg-[#00000074] flex justify-center  items-center text-white'><FaInstagram className='text-[50px] opacity-0 group-hover:opacity-100 group-hover:text-[35px] duration-300' /></div>
    </div>
    <div className='relative cursor-pointer group'>
        <img src={holiday1} alt='' />
        <div className='absolute top-0 w-full h-full bg-[#00000074] flex justify-center  items-center text-white'><FaInstagram className='text-[50px] opacity-0 group-hover:opacity-100 group-hover:text-[35px] duration-300' /></div>
    </div>
    <div className='relative cursor-pointer group'>
        <img src={holiday2} alt='' />
        <div className='absolute top-0 w-full h-full bg-[#00000074] flex justify-center  items-center text-white'><FaInstagram className='text-[50px] opacity-0 group-hover:opacity-100 group-hover:text-[35px] duration-300' /></div>
    </div>
    <div className='relative cursor-pointer group'>
        <img src={holiday3} alt='' />
        <div className='absolute top-0 w-full h-full bg-[#00000074] flex justify-center  items-center text-white'><FaInstagram className='text-[50px] opacity-0 group-hover:opacity-100 group-hover:text-[35px] duration-300' /></div>
    </div>
    <div className='relative cursor-pointer group'>
        <img src={holiday4} alt='' />
        <div className='absolute top-0 w-full h-full bg-[#00000074] flex justify-center  items-center text-white'><FaInstagram className='text-[50px] opacity-0 group-hover:opacity-100 group-hover:text-[35px] duration-300' /></div>
    </div>
          </div>
          <div className='flex justify-center sm:justify-between items-center mt-10 flex-wrap gap-3'>
                <p className='w-auto max-sm:order-2'> © Copyright 2024 <span className='underline'>Crafto</span></p>
            <ul className='flex items-center justify-center gap-3 flex-wrap sm:gap-5 w-full max-lg:order-1 lg:order-none my-4 lg:flex-1 '>
                <li className='cursor-pointer hover:text-[#ad9e49] duration-300'>Home</li>
                <li className='cursor-pointer hover:text-[#ad9e49] duration-300'>About us</li>
                <li className='cursor-pointer hover:text-[#ad9e49] duration-300'>Rooms</li>
                <li className='cursor-pointer hover:text-[#ad9e49] duration-300'>Amenities</li>
                <li className='cursor-pointer hover:text-[#ad9e49] duration-300'>Bistro</li>
                <li className='cursor-pointer hover:text-[#ad9e49] duration-300'>Contact</li>
            </ul>
            <div className="span flex items-center gap-5  w-auto max-sm:order-3">
                <span>Fb.</span>
                <span>Dr.</span>
                <span>Tw.</span>
                <span>Be.</span>
            </div>
          </div>
        </div>
    </div>

  )
}

export default GetOffers