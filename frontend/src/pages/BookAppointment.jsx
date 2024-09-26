import React,{useState,useEffect} from 'react'
import { images } from '../assets/images'
import { date,time } from '../assets/date&time'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles for react-calendar
import TimePicker from 'react-time-picker'; // Install this package
import 'react-time-picker/dist/TimePicker.css';

const BookAppointment = () => {

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('10:00'); // Default time
  const [description,setDescription] = useState('');
  const [debouncedText, setDebouncedText] = useState('');

  const handleDescription = (event)=>{
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

  const handleSubmit = () => {
    alert(`Selected Date: ${date.toLocaleDateString()} | Selected Time: ${time}
    `);
    console.log("Hello "+date)
    console.log("Hello "+time)
    if(date && time){
      navigate(`/confirm/${date}/${time}/${description}`)
    }
    else{
      console.log("give both data and time")

      alert("Give both data and time")
    }
      
  };
  //----------------------------------------

    const [date1,setDate1] = useState();
    const [time1,setTime1] = useState();
    const navigate = useNavigate();

    function dateSet(dateValue) {
      setDate1(dateValue)
      console.log(dateValue)
      
    }
    function timeSet(timeValue) {
      
      setTime1(timeValue)
    }

    function confirm() {
      console.log("Hello "+date)
      console.log("Hello "+time)
      if(date1 && time1 && description){
        navigate(`/confirm/${date1}/${time1}/${description}`)
      }
      else{
        console.log("give both data and time")

        alert("Give both data and time")
      }
        
       
    }


  return (
    <div className='l'>
        <div className='flex justify-center mb-7 font-medium text-3xl'>
        <p className=''>DOCTOR APPOINTMENT</p>
        </div>
      <div className='flex justify-center'>
       
        <img src={images.doctor} alt="" className='w-96 rounded-[20px] border' />
      </div>
      <div className='flex justify-center'>
      <p className='mt-10 font-medium'>Dr.Hermoine M.B.B.S M.S.</p>
      </div>

      {/* <div className='flex justify-center'>
        {
          date1.map((item,index)=>(
            <div onClick={()=>dateSet(item.date)}  className='flex justify-center m-5'>
              <input type='radio' name='date'></input>
              <button  className='p-3 bg-slate-300 rounded-[10px] cursor-pointer hover:bg-gray-400'  key={index}>{item.date}</button>
            </div>
          ))
        }
      </div>
      <div className='flex justify-center'>
        {
          time1.map((item,index)=>(
            <div onClick={()=>timeSet(item.time)} className='flex justify-center m-5'>
              <input type='radio' name='time'></input>
              <button   className='p-3 bg-slate-300 rounded-[10px] cursor-pointer hover:bg-gray-400'  key={index}>{item.time}</button>
            </div>
          ))
        }
      </div> */}
      
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
        <textarea onChange={handleDescription} value={description}  placeholder='Enter your description here' className='w-80 p-4 rounded-[3px] mb-5 shadow-2xl'></textarea>
      </div>
      <button 
        onClick={handleSubmit} 
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
    </div>
  )
}
export default BookAppointment;
