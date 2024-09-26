import React from 'react'
import {images} from '../assets/images'
import axios from 'axios'


const Alert = () => {

        function sendMessage(){
            axios.get('http://localhost:3000/admin/alert')
            .then((response)=>{
                console.log('Message Successfully Sent')
            })
        }
    

  return (
    <div>
      <div className='flex justify-center bg-gradient-to-r from-slate-400 via-slate-200 to-slate-00 w-full text-center'>
        <div onClick={()=>sendMessage()} className='
       hover:scale-125 mt-20 mb-20 p-20 bg-slate-300 rounded-[20px] shadow-2xl '>
            <img className='w-40' src={images.sos} alt="" />
            <p className='text-[50px]'>SOS</p>
        </div>
      </div>
    </div>
  )
}

export default Alert
