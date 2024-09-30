import React, { useState, useEffect } from 'react'
import { images } from '../assets/images'
import { date, time } from '../assets/date&time'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles for react-calendar
import TimePicker from 'react-time-picker'; // Install this package
import 'react-time-picker/dist/TimePicker.css';
import { Link } from 'react-router-dom'
import Back from '@/components/Back'
import BubbleMovement from '@/components/Bubble'
import Popup from '@/components/popup'


const BookAppointment = () => {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('10:00'); // Default time
  const [description, setDescription] = useState('');
  const [debouncedText, setDebouncedText] = useState('');
  const [date1, setDate1] = useState();
  const [time1, setTime1] = useState();
  const navigate = useNavigate();
  
  const [popup,setPopup] = useState(false);

  const handleDescription = (event) => {
    setDescription(event.target.value);
    console.log(description)
  }



  const handleDateChange = (newDate) => {


    // Format the date

    setDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };
const confirm = ()=>{
  setPopup(true)
}
  const handleSubmit = () => {
    // alert(`Selected Date: ${date.toLocaleDateString()} | Selected Time: ${time}
    // `);
    console.log("Hello " + date)
    console.log("Hello " + time)
    if (date && time) {
      navigate(`/confirm/${date}/${time}/${description}`)
    }
    else {
      console.log("give both data and time")

      alert("Give both data and time")
    }

  };
  //----------------------------------------






  return (
    <div className=' mb-40'>
      {
        popup? <div className='ml-[700px] mt-[270px] absolute z-10 scale-150 shadow-2xl'> <div
        class="div h-[8em] w-[15em] bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
      >
        <div
          class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#6464f4] group-hover:scale-[800%] duration-500 z-[-1] op"
        ></div>
      
        <button
          class="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500"
        >
          <span
            class="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0"
            onClick={handleSubmit}>OK</span
          >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      
        <h1
          class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]"
        >
          Date And Time
        </h1>
        <p
          class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em] text-[10px]"
        >
          {date +"\n"+time }
        </p>
      </div></div>:""
      }
      <div style={{filter : popup?'blur(5px)':'none'}}>
      <BubbleMovement />
      <div className=''>
        <Link to={'/home'}>
          <Back />
        </Link>
        
        </div>
        <div className='flex justify-center mt-20'>
        <div className='flex justify-center mr-32'>

          <img src={images.doctor} alt="" className='w-[450px] rounded-[20px] border' />
          
        </div>
        


        <div className="flex flex-col items-center p-5">
          <h2 className="text-2xl font-semibold mb-4">Select Date and Time</h2>
          <div className="mb-5 ">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="bg-white shadow-lg rounded-lg p-4"
            />
          </div>
          <div className="mb-5">
            <TimePicker
              onChange={handleTimeChange}
              value={time}
              className="border border-gray-300 rounded-md shadow-md"
            />
          </div>
          <div>
            <textarea onChange={handleDescription} value={description} placeholder='Enter your description here' className='w-[450px] h-40 p-4 rounded-[3px] mb-5 shadow-2xl '></textarea>
          </div>
          <button
            onClick={confirm}
            className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
export default BookAppointment;
