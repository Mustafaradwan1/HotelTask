import React from 'react'
import { sectionIcon } from '../../Dummy/Data'
import { motion } from 'framer-motion';
const Section1 = () => {
    const animation = {
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1 * index,
          },
        }),
      };
  return (
    <div className='bg-[#f4f1ed] py-[70px] px-[6%]'>
        <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
            {sectionIcon.map((ele,ind)=>(
                <motion.div
                variants={animation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={ind}
                key={ind} className='flex border-0 lg:border-r px-7 border-r-gray-300 last:border-r-0 md:odd:border-r md:border-r-0 flex-col flex-wrap items-center mb-10 sec  justify-center '>
                    <div className='mb-5 relative text-[#bc8f5c] overflow-hidden w-28 h-28 rounded-full text-3xl flex justify-center items-center  SectionAfter'>
                        {ele.icon}
                    </div>
                    <h2 className='text-[22px] text-center'>{ele.title}</h2>
                    <p className='text-[18px] text-center text-[#817f7c]'>{ele.p}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Section1