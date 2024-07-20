import React from 'react'
import {motion} from "framer-motion"
const Header = ({h2,p}) => {
  return (
    <div className='text-center'>
        <motion.h2
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{
          duration:0.5,
    
              }}
        className='font-bold text-[40px] sm:text-[44px] md:text-[48px]'>{h2}</motion.h2>
        <motion.p 
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{
          duration:0.5,
          delay:0.1
              }}
        className='text-[#817f7c] text-[18px]'>{p}</motion.p>

    </div>
  )
}

export default Header