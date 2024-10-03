import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { images } from '../assets/images';
import Button1 from '../components/Button1';
import BubbleMovement from '@/components/Bubble';
import Back from '@/components/Back';
import Loading from '@/components/Loading';


const InventoryTablets = () => {


  const [tabletsInfo, setTabletsInfo] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get('http://localhost:3000/tablets/tablets')
      .then((response) => {
        setTabletsInfo(response.data)
        console.log(response.data)
        setLoading(false)
      })

  }, [])
  console.log(tabletsInfo)
  return (
    <>
      {loading ? <div>
        <Loading />
      </div> :

        <div className='mb-56'>
          <div className=''>
            <Link to={'/inventory-chart'}>
              <Back />
            </Link>
          </div>
          <div className='flex justify-between mr-20 ml-10'>
            <p className='text-3xl font-bold'>All Tablets</p>
            <Link to={'/addTablets'}>
              <Button1 contain={"Add tablets"} />
            </Link>
          </div>
          <div className=''>
            <table className='w-full border-separate border-spacing-2'>
              <tr className=''>
                <th className='border border-slate-600 rounded-md'>No</th>
                <th className='border border-slate-600 rounded-md'>Name</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Category
                </th>
                <th className='border border-slate-600 rounded-md'>Quantity</th>
                <th className='border border-slate-600 rounded-md'>Options</th>
              </tr>
              {
                tabletsInfo.map((appointment, index) => {
                  return (
                    <tr key={appointment._id} className='h-8'>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {index + 1}
                      </td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {appointment.name}
                      </td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {appointment.category}
                      </td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        {appointment.quantity}
                      </td>
                      <td className='border border-slate-700 rounded-md text-center'>
                        <div className='flex justify-around'>
                          <Link to={`/infoTablets/${appointment._id}`}>
                            <img className='w-6' src={images.info} alt=''></img>
                          </Link>
                          <Link to={`/editTablets/${appointment._id}`}>
                            <img className='w-6' src={images.edit} alt=''></img>
                          </Link>
                          <Link to={`/deleteTablets/${appointment._id}`}>
                            <img className='w-6' src={images.dele} alt=''></img>
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
      }
    </>
  )
}

export default InventoryTablets
