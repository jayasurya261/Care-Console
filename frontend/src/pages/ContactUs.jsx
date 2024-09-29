import React from 'react'
import {images} from '../assets/images'
import Back from '@/components/Back'
import { Link } from 'react-router-dom'
import BubbleMovement from '@/components/Bubble'

const ContactUs = () => {
  return (
    <div className='mb-[400px]'>
      <BubbleMovement/>
       <div className='mb-10'>
     <Link to={'/'}>
     <Back  />
     </Link>
     </div>
      <div>
        <p className='text-2xl font-bold ml-20 mb-10'>CONTACT US</p>
        <div className='flex'>
            <div className='ml-20 text-[20px] mt-28'>
            <p className='font-bold'>Your Health, Our Priority – Reach Out to Care Today!</p>
            <p className='mt-3'>Address : </p>
            <p className='mt-1 ml-5'>No:2010,<br/> Kamaraj Road,<br/> kumbakonam. 614014.</p><br/>
            <p>Email : careconsole@gmail.com</p>
            <p>Mobile No : 6432467897</p>
            <div className='flex'>
            <p>Social Media :</p>
           <a href="https://www.instagram.com/"> <img src={images.instagram} alt=""className=' ml-2 w-8 mr-2' /></a>
            <a href="https://twitter.com"><img src={images.twitter} alt=""className='w-8' /></a>
            </div>
            </div>
            <div className='ml-[300px]'>
            <div className='mr-5 rounded-[20px]' style={{ maxWidth: "100%", overflow: "hidden", color: "red", width: "600px", height: "600px" }}>
              <div id="my-map-display" style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
                <iframe
                  style={{ height: "100%", width: "100%", border: 0 }}
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=banu+dental+clinic&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  allowFullScreen
                ></iframe>
              </div>
              <a className="code-for-google-map" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="grab-maps-authorization">
                premium bootstrap themes
              </a>
              <style>
                {`#my-map-display img{max-height:none;max-width:none!important;background:none!important;}`}
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
