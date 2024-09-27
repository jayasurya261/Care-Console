import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Appointment = () => {
 
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
      fees,
      prescription,
      
    }
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
          setFees(data.fees);
          setPrescription(data.prescription);
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
          <div className='flex mb-4'>
            <p>Fees : </p>
            <p>{fees}</p>
          </div>
          <div className='flex mb-4'>
            <p>Prescription: </p>
            <p>{prescription}</p>
          </div>
          {
            fees ==="No prescription added"?"":<div className='flex mb-4 justify-center'>
            
            <Link to='/payment'>
            <button className='p-3 rounded-[10px] bg-slate-400'>Pay Online</button>
            </Link>
          </div>
          }
        
        </div>
      </div>
    </div>
  );
};

export default Appointment;
