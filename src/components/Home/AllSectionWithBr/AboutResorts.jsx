import React, { useRef } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import about from "../../../assets/aboutHome.jpg"
import about2 from "../../../assets/about2.jpg"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 2000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
const AboutResorts = () => {
  return (
    <div className='py-[90px] overflow-hidden relative z-20'>
        <div className="container">
          <div className='flex flex-wrap w-full '>
            <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
              <motion.h6
              initial={{ opacity: 0,rotateY:"-90deg",y:60 }}
              whileInView={{ opacity: 1,rotateY:"0deg",y:0 }}
              transition={{ duration:0.5 }}
               className='text-[#ec8d56] text-[18px] mb-3'>About resorts</motion.h6>
              <motion.h2
               initial={{ opacity: 0,rotateY:"-90deg",y:60 }}
              whileInView={{ opacity: 1,rotateY:"0deg",y:0 }}
              transition={{ duration:0.5,delay:0.3 }}
              className='text-[41px] md:text-[48px] lg:text-[55px] leading-none mb-5'>Relax at the luxury resorts around the entire world.</motion.h2>
              <motion.p
               initial={{ opacity: 0,rotateY:"-90deg",y:60 }}
              whileInView={{ opacity: 1,rotateY:"0deg",y:0 }}
              transition={{ duration:0.5,delay:0.6 }}
              className='text-[#817f7c] text-[18px] mb-8'>A design-led approach guides the team, implementing practices, products and services that are thoughtful and environmentally sound. Family of professionals that creates intelligent designs that help the face of hospitality.</motion.p>
            <motion.div
             initial={{ opacity: 0,rotateY:"-90deg",y:60 }}
              whileInView={{ opacity: 1,rotateY:"0deg",y:0 }}
              transition={{ duration:0.5,delay:0.9 }}
            >
              <div className='flex gap-3 sm:gap-5 flex-wrap'>
                <button className=' py-[6px] px-[14px] overflow-hidden flex justify-between items-center gap-5  rounded-md relative group border bg-gray-800 shadow-md text-white'>
                  <div>
                      <div className='translate-y-1/2 relative font-bol  text-[18px] group-hover:-translate-y-20 duration-500'>
                       About Resort
                      </div>
                      <div className='translate-y-20 relative font-bold  text-[18px] group-hover:-translate-y-1/2 duration-500'>
                        About Resort 
                      </div>
                  </div>
                </button>
              <div className='flex gap-2 items-center'>
                <span className='text-[#817f7c] text-[22px]'><FaPhoneAlt/></span>
                <span className='text-[20px]  font-bold'>01033720618</span>
              </div>
              </div>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 relative '>
             <motion.div
              initial={{ x:100}}
              whileInView={{ x:0}}
              transition={{ duration:0.8,}}
             className='max-sm:max-h-[458px] w-[70%] bg-red-500 rounded-md shadow ml-auto overflow-hidden relative'>
              <motion.div
                initial={{ x:0}}
                whileInView={{ x:"100%"}}
                transition={{ duration:0.8,delay:0.5  }}
              className='absolute w-full h-full bg-[#e9bb75] top-0 '></motion.div>
               <img src={about} alt='about' className='h-full w-full ' />
               </motion.div>
              <motion.div
                initial={{ y:100}}
                whileInView={{ y:0}}
                transition={{ duration:0.8,}}
              className='w-[65%] absolute -bottom-20'>
                <motion.div
                  initial={{ opacity:0}}
                  whileInView={{ opacity:1}}
                  transition={{ duration:0.8,delay:0.8}}
                >
                <span className='text-[#817f7c]'>STARTED IN</span>
                <h2 className='text-[75px] font-bold mb-12 leading-none'>1995</h2>
                </motion.div>
                <div className='relative overflow-hidden'>
                  <motion.div
                          initial={{ x:0}}
                          whileInView={{ x:"100%"}}
                          transition={{ duration:0.8,delay:0.8}}
                  className='absolute w-full h-full bg-[#fff] top-0'></motion.div>
                <img src={about2} alt='' className='rounded-md' />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <section className='mt-32 w-full'>
      <ParallaxText baseVelocity={-5}><ul className='flex gap-32 list-circle w-full text-xl md:text-3xl'>
        <li>We make the best for all our customers</li>
        <li>The resort is built in and around an 18 acres</li>
        <li>Sustainable and meaningful ecosystem of hospitality</li>
        <li>Our hotel has been present for over 20 years</li>
        <li>We make the best for all our customers</li>
        <li>The resort is built in and around an 18 acres</li>
        </ul></ParallaxText>
        </section>
    </div>
  )
}
export default AboutResorts



