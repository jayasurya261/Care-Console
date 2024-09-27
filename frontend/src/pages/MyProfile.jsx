import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios'
const MyProfile = () => {
  const [userId, setUserId] = useState('');

  const [date,setDate] = useState('');
  const [userTime,setTime] = useState('');
  const [userEmail,setUserEmail] = useState();
  const [userName,setUserName] = useState();
  const [userPassword,setUserPassword] = useState();
  const [userNumber,setUserNumber] = useState();

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
    <div className='flex justify-center'>
      <div className='flex text-center justify-center p-16 rounded-[15px] bg-slate-300'>
        <div>
            <p className='mb-10 font-medium text-3xl'>MY PROFILE</p>
            <div className='flex mb-5 font-medium'>
              <p>NAME : </p>
              <p>{userName}</p>
            </div>
            <div className='flex mb-5 font-medium'>
              <p>EMAIL : </p>
              <p>{userEmail}</p>
            </div>
            
            <div className='flex mb-5 font-medium'>
              <p>NUMBER : </p>
              <p>{userNumber}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
