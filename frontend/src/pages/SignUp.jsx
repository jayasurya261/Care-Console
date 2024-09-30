import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Back from '@/components/Back';
import BubbleMovement from '@/components/Bubble';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function createUser(e) {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages

    // Validate email
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const data = {
      name,
      email,
      password,
      number,
    };
    
    setLoading(true);
    
    axios
      .post('http://localhost:3000/users', data)
      .then(() => {
        setLoading(false);
        navigate('/login');
      })
      .catch((error) => {
        setLoading(false);
        alert(`${error} An error occurred. Please check the console.`);
        console.log(error);
      });
  }

  return (
    <div className='pb-20'>
      <BubbleMovement />
      <div>
        <Link to={'/home'}>
          <Back />
        </Link>
      </div>
      <div className='flex justify-center mb-3'>
        {loading ? <Spinner /> : ''}
        <form className='flex flex-col justify-center bg-slate-200 p-12 rounded-3xl lg:p-24 shadow-2xl text-center'>
          <h1 className='flex justify-center font-medium text-3xl'>SIGN IN</h1>
          
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='lg:w-80 mt-8 p-3 rounded-full'
            type="text"
            placeholder='Enter Name'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-8 p-3 rounded-full'
            type="email"
            placeholder='Enter Email'
          />
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>} {/* Display error message */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-8 p-3 rounded-full'
            type="password"
            placeholder='Enter Password'
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className='mt-8 p-3 rounded-full'
            type="text"
            placeholder='Enter mobile number'
          />
          <button
            type='submit'
            onClick={createUser}
            className='mt-8 p-2 rounded-full text-white hover:bg-slate-300'
            style={{ backgroundColor: 'rgb(108,96,240)' }}
          >
            SUBMIT
          </button>
          <br />
          <button
            onClick={() => navigate('/login')}
            className='text-white rounded-full p-2 hover:bg-slate-300'
            style={{ backgroundColor: 'rgb(108,96,240)' }}
          >
            Login?
          </button>
          <p className='mt-6'>Are you an Admin?</p>
          <button
            onClick={() => navigate('/admin-login')}
            className='rounded-full text-blue-800 mt-7 underline text-[19px]'
          >
            Admin
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
