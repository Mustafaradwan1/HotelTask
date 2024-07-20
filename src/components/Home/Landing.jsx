import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import br from "../../assets/br.svg" 
import { motion } from "framer-motion"
const Landing = () => {
  return (
    <div className=' bg-[url("/public/beach.jpg")] h-screen bg-no-repeat bg-cover bgImg sm:bg-center lg:bg-fixed landing w-full relative'>
      <div className='h-full w-full bg-[#0000006d]'>
        <div className="container  h-full m-auto flex flex-col items-center justify-center">
          <motion.h2
           initial={{ rotateX: "-90deg",scale:1.1 }}
           animate={{ rotateX: "0deg",scale:1 }}
           transition={{
            duration: 0.5,
          }}
           className='text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white'>Luxury space that you can afford</motion.h2>
          <motion.h1
            initial={{ rotateX: "-90deg",scale:1.1 }}
            animate={{ rotateX: "0deg",scale:1 }}
            transition={{
            duration: 0.5,
            delay:0.3
            }}
          className='text-[82px] sm:text-[112px] md:text-[128px] lg:leading-[250px] lg:text-[200px] text-white font-bold'>Holiday</motion.h1>
          <motion.button
                      initial={{ rotateX: "-90deg",scale:1.1 }}
                      animate={{ rotateX: "0deg",scale:1 }}
                      transition={{
                      duration: 0.5,
                      delay:0.6
                      }}
           className='px-5 h-16 w-56 overflow-hidden flex justify-between items-center gap-5     rounded-md relative group border bg-white'>
            <div>
              <div className='translate-y-1/2 relative font-bold text-gray-700  text-[18px] group-hover:-translate-y-20 duration-500'>
                Book Your Stay
              </div>
              <div className='translate-y-20 relative font-bold  text-gray-700 text-[18px] group-hover:-translate-y-1/2 duration-500'>
                Book Your Stay 
              </div>
            </div>
            <span className='text-[#b0583f] text-[22px]'><FaArrowRight/></span>
          </motion.button>
          <motion.p
                      initial={{ rotateX: "-90deg",scale:1.1 }}
                      animate={{ rotateX: "0deg",scale:1 }}
                      transition={{
                      duration: 0.5,
                      delay:0.9
                      }}
          className='text-[22px] mt-14 text-white flex flex-col  items-center sm:items-end text-center'>
            Perfect place to relax and enjoy your rest.
            <img src={br} alt='br' className='w-40 mt-3' />
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Landing