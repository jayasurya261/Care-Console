import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {images} from '../assets/images'
import {Link} from 'react-router-dom'

const AllAppointment = () => {

      const [appointmentsData,setAppointmentsData] = useState([]);

      useEffect(()=>{
            axios
            .get('http://localhost:3000/appointments/admin/all-appointments')
            .then((response)=>{
              setAppointmentsData(response.data.data)
              console.log(response.data)
              
            })
           
      },[])
      console.log(appointmentsData)
  return (
    <div className='mb-[400px]'>
      <div>
        <p className='mb-10 font-medium text-3xl ml-5'>ALL APPOINTMENTS</p>
        <div className=''>
          <table className='w-full border-separate border-spacing-2'>
        <tr className=''>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Email</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Date
          </th>
          <th className='border border-slate-600 rounded-md'>Time</th>
          <th className='border border-slate-600 rounded-md'>Info</th>
        </tr>
            {
              appointmentsData.map((appointment,index)=>{
                return(
                  <tr key={appointment._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {index+1}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {appointment.email}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {appointment.date}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    {appointment.time}
                  </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center'>
                      <Link to={`/appointment/${appointment._id}`}>
                      <img className='w-6' src={images.info} alt=''></img>
                      </Link>
                    </div>
                  </td>
                 
              </tr>
              
                )
                
              })
              
            }
            </table>
            
  
        </div>
      </div>
    </div>
  )
}

export default AllAppointment
