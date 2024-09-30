import React, { useState, useEffect } from 'react';
import { images } from '../assets/images';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Back from '@/components/Back';
import BubbleMovement from '@/components/Bubble';

const ConfirmBooking = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(false);
  const { date, time, description } = useParams(); // Pull date, time, description from URL parameters
  const navigate = useNavigate();

  const confirm = () => {
    const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage

    axios
      .get(`http://localhost:3000/users/my-profile?userId=${userId}`)
      .then((response) => {
        const fetchedEmail = response.data.data.email; // Fetch email from the response
        setEmail(fetchedEmail); // Update the email state

        const info = {
          email: fetchedEmail,
          date,
          time,
          description,
          prescription: 'No prescription added', // Example prescription
          fees: 'Fees will be shown after the doctor consultation',
        };

        return axios.post('http://localhost:3000/appointments/add-appointments', info);
      })
      .then((response) => {
        console.log('Appointment booked successfully', response);
        setMessage(true); // Show the success message
      })
      .catch((error) => {
        console.error('Error booking appointment: ', error);
      });
  };

  // useEffect to handle the 5-second delay after confirming
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        navigate('/'); // Navigate after 5 seconds
      }, 3000); // 5000ms = 5 seconds

      return () => clearTimeout(timer); // Clean up timeout
    }
  }, [message, navigate]); // Dependency on 'message' and 'navigate'

  return (
    <div className="flex pb-32">
      <BubbleMovement />
      <div className=''>
        <Link to={'/appointment'}>
          <Back />
        </Link>
      </div>
      <div>
        <img className="w-96 ml-40 rounded-[20px]" src={images.doctor} alt="Doctor" />
      </div>
      <div className="ml-28">
        <p className="text-3xl font-medium mb-10">CONFIRM APPOINTMENT</p>
        <p className="text-2xl font-medium mb-5">Dr. Hermoine M.B.B.S</p>

        <div className="flex font-medium mb-5">
          <p>DATE: </p>
          <p>{date}</p>
        </div>
        <div className="flex font-medium mb-5">
          <p>TIME: </p>
          <p>{time}</p>
        </div>
        <div className="mt-10">
          <button onClick={confirm} className="bg-blue-500 text-white rounded-md p-2 bg-blue-600 rounded-[10px]">
            CONFIRM
          </button>
        </div>
      </div>

      {message && (
        <div className='mt-[500px] ml-40 h-10 p-3 border-2 border-blue-800 scale-110'>
          <p>Appointment Successfully Booked</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmBooking;


