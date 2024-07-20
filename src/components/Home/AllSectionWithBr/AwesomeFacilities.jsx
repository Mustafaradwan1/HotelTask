import React from 'react'
import { Awesome } from '../../../Dummy/Data'
import shaped from "../../../assets/shaped.webp"
import shapLogo from "../../../assets/shapLogo.webp"
import Header from './Header'
import {motion} from "framer-motion"
const AwesomeFacilities = () => {
    const animation = {
        initial: {
          opacity: 0,
          y: 10,
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
    <div className='bg-[#f4f1ed] py-[90px] '>
        <div className="container relative z-20">
            <div className='w-full text-center mb-7'>
                <Header h2={'Awesome facilities'} p={'Our hotel has been present for over 20 years.'}  />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {Awesome.map((ele,ind)=>(
                    <motion.div
                    variants={animation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={ind}
                    class="flip-card m-auto px-5 pb-5" key={ind}>
                        <div class="flip-card-inner">
                            <div class="flip-card-front rounded-md">
                                <img src={ele.img} className='rounded-md w-full h-full' alt="Avatar"/>
                            </div>
                            <div class="flip-card-back rounded-md ">
                                <span className='text-[50px]'>{ele.icon}</span>
                                <p>{ele.title}</p>
                            </div>
                        </div>
                        <h2 className='text-center my-4 text-[20px]'>{ele.h2}</h2>
                    </motion.div>
                    
                ))}
            </div>
            <div className='bg-white rounded-md shadow-md flex  md:h-40 absolute w-[90%] md:w-[80%] left-1/2 -translate-x-1/2'>
                <div className=' bg-[#ac8d56] flex justify-center items-center w-[45px]'>
                    <p className=' text-white -rotate-90'>TESTIMONIAL</p>
                </div>
                <div className='flex flex-1 justify-between items-center px-7 gap-4 flex-col md:flex-row py-5'>
                    <img src={shaped} alt='' />
                    <p className='flex-1  text-center  '>
                        Life is shaped by a series of interconnected experiences 
                        <span>our environments.</span>
                    </p>
                    <img src={shapLogo} alt='' className='w-[200px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AwesomeFacilities