import React from 'react'
import Header from './Header'
import { Ratings } from '../../../Dummy/Data'
import tripImg from "../../../assets/brand3.svg"
import {motion} from "framer-motion"
const ExclusiveRatings = () => {
  return (
    <div className='bg-gray-100 py-[90px] '>
        <div className="container relative z-20">
        <div className='mb-7'><Header h2={'Exclusive ratings'} p={'Enjoy in resorts and awesome ratings.'} /></div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {Ratings.map((ele,ind)=>(
                <motion.div
                initial={{opacity:0,rotateX:"50deg"}}
                whileInView={{opacity:1,rotateX:"0deg"}}
                transition={{
                  duration:0.5
                }}
                key={ind} className='bg-white border rounded-md'>
                    <div className='flex items-center  px-4 sm:px-8 md:px-12 py-10 gap-4 border-b border-b-gray-300'>
                        <img src={ele.img} alt='' className='w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full shadow-md' />
                        <p className='text-[#817f7c]'>{ele.p}</p>
                    </div>
                    <div className='flex items-center justify-between  px-4 sm:px-8 md:px-12 py-4'>
                        <h2 className='font-bold text-[18px]'>{ele.title}</h2>
                        <span className='flex gap-1 text-[20px] text-[#f0d53d]'>{ele.icon}{ele.icon}{ele.icon}{ele.icon}{ele.icon}</span>
                    </div>
                </motion.div>
            ))}
        </div>
        <p className='flex items-center justify-center mt-7 text-[24px] flex-wrap'>Check all <span className='text-[25px] font-bold mx-1'>3,583</span> exclusive visitor reviews on
        <img src={tripImg} alt='tripImg ' className='w-40 ml-2' />
        </p>
        </div>
    </div>
  )
}

export default ExclusiveRatings