import React from 'react'
import {images} from '../assets/images'

const Footer = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-slate-400 via-slate-200 to-slate-100  w-full border-t-2 border-black' id='footer'>
        <p className='pl-10 bg-slate-100' id='footer'>CONTACT US</p>
        <div className='flex justify-between bg-slate-100'>

          {/*--------Right Side------*/}
          <div className='ml-10'>
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
          {/*--------Center Side------*/}
          <div>
            <form>
              <p>FeedBack Form</p>
              <input className=' font-medium mt-3 p-2 bg-white placeholder:text-black' type='text' placeholder='Enter Your Feedback'></input>
              <button className='ml-2 bg-slate-300 p-2 rounded-full '>SUBMIT</button>
            </form>
          </div>
          {/*------Left Side-------*/}
          <div>
            <div className='mr-5 rounded-[20px]' style={{ maxWidth: "100%", overflow: "hidden", color: "red", width: "300px", height: "300px" }}>
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
    </>
  )
}

export default Footer