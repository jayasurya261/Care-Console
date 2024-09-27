import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AppointmentInfo = () => {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [prescription, setPrescription] = useState('');
  const [fees, setFees] = useState('');

  const { _id } = useParams();

  const confirm = (e) => {
    e.preventDefault();
    console.log(prescription) // Prevent form submission from reloading the page
    console.log(fees);
    const data = {
      prescription,
      fees,
    }

    axios
    .put(`http://localhost:3000/users/modify-appointments/${_id}`,data)
    .then(()=>{
      console.log("Modified successfully")
    })
    .catch((error)=>{
      alert('An error happened. Please check console');
      console.log(error)
    })
  
    alert("Prescription and Fees Added")



  };

  // Fetch appointment info only once when the component mounts or when `_id` changes
  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:3000/appointments/appointment-info?appointmentId=${_id}`)
        .then((response) => {
          const data = response.data.data;
          setEmail(data.email);
          setDate(data.date);
          setTime(data.time);
          setDescription(data.description);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [_id]);

  // Fetch user name when the email changes
  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:3000/users/appointment-name?email=${email}`)
        .then((response) => {
          setName(response.data.data.name);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [email]);

  return (
    <div className='flex justify-center pt-10 pb-12'>
      <div className='flex justify-center bg-slate-200 shadow-2xl p-10 rounded-[20px]'>
        <div>
          <p className='text-2xl'>APPOINTMENT INFO</p>
          <div className='flex mb-4 mt-4'>
            <p>Name: </p>
            <p>{name}</p>
          </div>
          <div className='flex mb-4'>
            <p>Email: </p>
            <p>{email}</p>
          </div>
          <div className='flex mb-4'>
            <p>Date: </p>
            <p>{date}</p>
          </div>
          <div className='flex mb-4'>
            <p>Time: </p>
            <p>{time}</p>
          </div>
          <div className='flex mb-4'>
            <p>Description: </p>
            <p>{description}</p>
          </div>
         <form onSubmit={confirm}> {/* Use onSubmit instead of onClick */}
           <div className='flex'>
            <p>Prescription: </p>
            <textarea
              className='bg-slate-100'
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
            />
          </div>
          <div className='flex mt-2'>
            <p>Fees: </p>
            <input
              type="number"
              className='bg-slate-100'
              placeholder='Rs.XXXXX'
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </div>
          <div className='text-center '>
          <button type="submit" className='p-3 mt-3 bg-slate-300 rounded-[10px]'>
            Confirm
          </button>
          </div>
         </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfo;
