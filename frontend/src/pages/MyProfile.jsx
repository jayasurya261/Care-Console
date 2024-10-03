import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios'
import { images } from '@/assets/images';
const MyProfile = () => {
  const [userId, setUserId] = useState('');

  const [date,setDate] = useState('');
  const [userTime,setTime] = useState('');
  const [userEmail,setUserEmail] = useState();
  const [userName,setUserName] = useState();
  const [userPassword,setUserPassword] = useState();
  const [userNumber,setUserNumber] = useState();
  const [userBirth,setUserBirth] = useState();
  const [userLocation,setUserLocation] = useState();
  const [userLanguage,setUserLanguage] = useState();

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
    console.log(userId)

    axios
    .get(`http://localhost:3000/users/my-profile?userId=${storedUserId}`)
    .then((response)=>{
      
      setUserName(response.data.data.name)
      setUserEmail(response.data.data.email)
      setUserPassword(response.data.data.password)
      setUserNumber(response.data.data.number)
      setUserBirth(response.data.data.birth)
      setUserLocation(response.data.data.location)
      setUserLanguage(response.data.data.language)
      
    })
    .catch((error)=>{
      console.log(error);
    })
    

  }, []); 
  console.log(userName)
  console.log(userEmail)
  console.log(userPassword)
  console.log(userNumber)

  return (
    <div className=' justify-center bg-[#e8e4ec] pt-10 items-center mb-20 pb-20'>
     <div className='flex flex-col justify-center items-center bg-white rounded-[17px] shadow-2xl pb-20 '>
      <img src={images.dots} className='w-6 absolute z-20 mt-[-390px] ml-[1600px] cursor-pointer' alt="" />
      <img className='w-[1650px] h-[250px] rounded-t-[17px]' src={images.profilebg} alt="" />
      <img className='rounded-full p-1  bg-white w-40 absolute mt-[150px]' src={images.profile} alt="" />
      <p className='mt-[120px] text-2xl '>{userName}</p>
      <p className='text-slate-600  '>{userLocation}</p>
      
     </div>
     <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 ml-10 justify-center">
      <div className="w-full flex flex-col 2xl:w-1/3">
        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex border-y py-2">
              <span className="font-bold w-24">Full name:</span>
              <span className="text-gray-700">{userName}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Birthday:</span>
              <span className="text-gray-700">{userBirth}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Mobile:</span>
              <span className="text-gray-700">{userNumber}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Email:</span>
              <span className="text-gray-700">{userEmail}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Location:</span>
              <span className="text-gray-700">{userLocation}</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Languages:</span>
              <span className="text-gray-700">{userLanguage}</span>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default MyProfile
