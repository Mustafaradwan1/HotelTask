import React, { useState } from 'react'
import { PremiumCottage } from '../../../Dummy/Data'
import room from "../../../assets/room.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import { CiFries } from "react-icons/ci";
import { GiMonclerJacket } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";

const Premium  = () => {
    const [first, setfirst] = useState()
  return (
    <div className='flex flex-wrap flex-col md:flex-row bg-[#f4f1ed] relative z-20'>
        <div className='w-full md:w-1/3 lg:w-1/4 border-r border-r-gray-300'>
            {PremiumCottage.map((ele,ind)=>(
                <div key={ind} className='Premium px-5  border-b py-7 last:border-b-none relative'>
                    <div className='relative z-10 flex items-center gap-2'>
                      <span className='text-[#ac8d56]   font-bold text-[18px] duration-700'>{ele.num}</span>
                      <p className='text-[18px] font-bold duration-700'>
                          {ele.title}
                      </p>
                      <div className='arrow w-14 h-14 flex justify-center items-center rounded-full text-white text-2xl absolute -right-2 bg-[#ac8d56] opacity-0 '>{ele.icon}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full md:flex-1 flex flex-col lg:flex-row '>
          <div className='w-full lg:w-1/2  relative max-md:h-[400px] '>
            <img src={room} alt="room" className='w-full h-full object-cover' />
            <div className='absolute bottom-0 flex w-full sm:justify-end '>
              <div className='h-[100px] px-8 text-center   bg-white flex flex-col justify-center'>
                <span className=''>Starting from</span>
                <p className='text-center'>$50.00</p>
              </div>
              <div className='bg-gray-800 text-white flex gap-2 items-center h-[100px] px-8 cursor-pointer'>
                <p>Book Now</p>
                <span className='w-14 h-14 rounded-full flex justify-center items-center bg-[#ffffff18]'>
                  <FaArrowRightLong/>
                </span>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex flex-col justify-center max-lg:p-10 max-lg:text-center lg:px-7'>
            <span className='text-[#ac8d56] text-[18px]'>Phenomenal view</span>
            <h2 className='text-[39px] lg:text-[45px] pb-4 leading-none'>Premium cottage</h2>
           <p className='text-[#817f7c] text-[18px] pb-5  leading-relaxed'>Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.</p>
           <div className='flex gap-8 flex-col sm:flex-row sm:gap-2'>
            <div className='px-5 sm:border-r sm:border-gray-300 text-center'>
              <CiFries className='m-auto text-[35px] text-[#ac8d56]' />
              <span>BREAKFAST INCLUDED</span>
            </div>
            <div className='px-5 sm:border-r sm:border-gray-300 text-center'>
              <GiMonclerJacket className='m-auto text-[35px] text-[#ac8d56]' />
              <span>LAUNDRY FACILITIES</span>
            </div>
            <div className='px-5 text-center'>
              <FaCar className='m-auto text-[35px] text-[#ac8d56]' />
              <span>PICKUP AND DROP</span>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Premium 