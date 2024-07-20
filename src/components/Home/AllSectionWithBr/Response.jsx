import React from 'react'
import AboutResorts from './AboutResorts'
import AwesomeFacilities from './AwesomeFacilities'
import Exclusive from './Exclusive '
import Premium from './Premium '
import ExclusiveRatings from './ExclusiveRatings'
import GetOffers from './GetOffers'
import Br from './Br'

const Response = () => {
  return (
    <div className='relative'>
      <AboutResorts/>
      <AwesomeFacilities/>
      <Exclusive/>
      <Premium/>
      <ExclusiveRatings/>
      <GetOffers/>
      <Br/>
    </div>
  )
}

export default Response