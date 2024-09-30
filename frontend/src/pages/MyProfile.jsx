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
    <div className=' justify-center bg-[#e8e4ec] pt-10 items-center mb-20 pb-20'>
     <div className='flex flex-col justify-center items-center bg-white rounded-[17px] shadow-2xl pb-20 '>
      <img src={images.dots} className='w-6 absolute z-20 mt-[-390px] ml-[1600px] cursor-pointer' alt="" />
      <img className='w-[1650px] h-[250px] rounded-t-[17px]' src={images.profilebg} alt="" />
      <img className='rounded-full p-1  bg-white absolute mt-[150px]' src={images.profileimg} alt="" />
      <p className='mt-[120px] text-2xl '>Keerthika</p>
      <p className='text-slate-600  '>Coimbatore,India</p>
      
     </div>
     <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 ml-10">
      <div className="w-full flex flex-col 2xl:w-1/3">
        <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex border-y py-2">
              <span className="font-bold w-24">Full name:</span>
              <span className="text-gray-700">Amanda S. Ross</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Birthday:</span>
              <span className="text-gray-700">24 Jul, 1991</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Joined:</span>
              <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Mobile:</span>
              <span className="text-gray-700">(123) 123-1234</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Email:</span>
              <span className="text-gray-700">amandaross@example.com</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Location:</span>
              <span className="text-gray-700">New York, US</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-24">Languages:</span>
              <span className="text-gray-700">English, Spanish</span>
            </li>
            <li className="flex items-center border-b py-2 space-x-2">
              <span className="font-bold w-24">Elsewhere:</span>
              <a href="#" title="Facebook">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.86 506.86">
                  <defs>
                    <style>{".cls-1{fill:#1877f2;}.cls-2{fill:#fff;}"}</style>
                  </defs>
                  <path className="cls-1" d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"></path>
                  <path className="cls-2" d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"></path>
                </svg>
              </a>
              <a href="#" title="Twitter">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333">
                  <path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z" fill="#1da1f2"></path>
                </svg>
              </a>
              <a href="#" title="LinkedIn">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333">
                  <path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#0077b5"></path>
                </svg>
              </a>
              <a href="#" title="Github">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 640 640">
                  <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.086 2.257 48.988 32.952 48.988 32.952 28.538 48.878 74.867 34.756 93.135 26.567 2.895-20.669 11.149-34.76 20.29-42.765-71.076-8.098-145.885-35.538-145.885-158.173 0-34.936 12.504-63.465 32.951-85.824-3.306-8.098-14.276-40.698 3.148-84.837 0 0 26.868-8.595 88.033 32.772 25.548-7.116 52.953-10.683 80.167-10.814 27.212.131 54.616 3.698 80.169 10.814 61.146-41.367 88.003-32.772 88.003-32.772 17.427 44.139 6.463 76.739 3.157 84.837 20.467 22.359 32.93 50.888 32.93 85.824 0 122.976-74.973 150.015-146.28 158.008 11.45 9.86 21.639 29.373 21.639 59.17 0 42.725-.412 77.188-.412 87.697 0 8.553 5.838 18.486 21.972 15.37C548.332 589.235 640 469.353 640 327.96c0-176.718-143.293-320-320.012-320z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default MyProfile
