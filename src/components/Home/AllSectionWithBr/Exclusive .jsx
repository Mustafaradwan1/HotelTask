import React from 'react'
import { ExclusiveOffers } from '../../../Dummy/Data'
import brand3 from "../../../assets/brand3.svg"
import brand2 from "../../../assets/brand2.svg"
import brand1 from "../../../assets/brand1.svg"
import brand from "../../../assets/brand.svg"
import Header from './Header'
import {motion} from "framer-motion"
const Exclusive  = () => {
  const animation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
      },
    }),
  };
  return (
    <div className='pb-[100px] pt-[230px] sm:pt-[200px] md:pt-[100px] relative z-20'>
        <div className="container">
        <div className='w-full text-center mb-7'>
            <Header h2={'Exclusive offers'} p={'Enjoy in resorts and awesome facilities'}  />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {ExclusiveOffers.map((ele,ind)=>(
                <motion.div
                variants={animation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={ind}
                key={ind} className=' overflow-hidden  cursor-pointer group  rounded-md relative h-[350px] md:h-[350px] lg:h-[400px]'>
                    <div className='absolute top-0 left-0 w-full h-full'>
                        <img  src={ele.img} alt="" className='h-full w-full group-hover:scale-110 transition  duration-1000' />
                        <div className='absolute w-full h-full bg-[#00000056] top-0 left-0'></div>
                    </div>
                    <div className='text-white relative  flex flex-col justify-center items-center h-full  pt-[50px]'>
                        <h2 className='border-b pb-2 px-5 border-gray-400 mb-3'>{ele.h2}</h2>
                        <p className='sm:text-[18px] md:text-[21px] lg:text-[28px] text-center mb-5'>{ele.title}</p>
                        <div className='relative  group'>
                            <p className='bg-white rounded-md text-gray-800 py-1 px-3 text-[14px] opacity-100 group-hover:opacity-0 duration-500'>{ele.offer}</p>
                            <span className='flex justify-center items-center w-16 h-16 bg-[#ac8d56] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 cursor-pointer scale-50 opacity-0 group-hover:opacity-100 duration-500 group-hover:scale-100'>{ele.icon}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        <div
         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 '>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{
                  duration:0.5
                }}
            className='w-full '>
              <img src={brand3} alt='' className='w-3/4 m-auto max-md:mb-4 cursor-pointer hover:-translate-y-3  duration-500 hover:opacity-65 ease-in'  />
            </motion.div>
            <motion.div
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{
              duration: 0.5,
              delay:0.3
              }}
            className='w-full '>
              <img src={brand2} alt='' className='w-3/4 m-auto max-md:mb-4 cursor-pointer hover:-translate-y-3  duration-500 hover:opacity-65 ease-in'  />
            </motion.div>
            <motion.div
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{
              duration: 0.5,
              delay:0.6
              }}
            className='w-full '>
              <img src={brand1} alt='' className='w-3/4 m-auto max-md:mb-4 cursor-pointer hover:-translate-y-3  duration-500 hover:opacity-65 ease-in'  />
            </motion.div>
            <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{
               duration:0.5,
               delay:0.9
              }}
            className='w-full '>
              <img src={brand} alt=''  className='w-3/4 m-auto cursor-pointer  hover:-translate-y-3 duration-500 hover:opacity-65 ease-in' />
            </motion.div>
        </div>
        </div>
        <div className='flex gap-4 justify-center mt-10'>
            <span className='px-3 py-1 bg-gray-800 text-[12px] text-white'>AWESOME</span>
            <p> <span className='underline text-[18px]'> Get 20% discount</span> on hotels booking with above websites.</p>
        </div>
    </div>
  )
}

export default Exclusive 