import React from 'react'
import Landing from './Landing'
import Section1 from './Section1'
import Response from './AllSectionWithBr/Response'

const TheHeader = () => {
  return <>
    <div className='h-screen w-full relative '>
      <div className=' relative z-20'>
      <Landing/>
      <Section1/>
      <Response/>
      </div>
    </div>
  </>
  
}

export default TheHeader