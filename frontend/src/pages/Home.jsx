import React from 'react'
import Service from '../components/service'
import ClinicHeading from '../components/ClinicHeading'
import BubbleMovement from '@/components/Bubble'

const Home = () => {
  return (
    <div className=''>
      <BubbleMovement/>
      <ClinicHeading/>
      <Service/>
    </div>
  )
}

export default Home
