import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Back from '@/components/Back';
import BubbleMovement from '@/components/Bubble';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  function toSignup() {
    navigate('/signup');
  }

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (email === '' || password === '') {
      alert('Give Valid Data');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3000/users/find-user', {
        params: { email, password },
      });

      setUserInfo(response.data); // This will be updated asynchronously

      // Directly check the response from the API, rather than waiting for userInfo to update
      if (response.data == null || response.data.data == null) {
        alert('User not found!');
      } else {
        const userId = response.data.data._id;
        navigate(`/${userId}`);
        localStorage.setItem('userId', userId);
        localStorage.setItem('login-type', 'user');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (<>
  <BubbleMovement/>
  <div className=''>
     <Link to={'/signup'}>
     <Back  />
     </Link>
     </div>
    <div className='flex justify-center '>
     
      <form className='text-center justify-center bg-slate-200 mb-20 p-24 rounded-3xl' onSubmit={submit}>
        <p className='font-medium text-3xl'>LOGIN</p>
        <input
          type="email"
          className='lg:w-80 mt-8 p-3 rounded-full'
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className='lg:w-80 mt-8 p-3 rounded-full'
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type='submit' className='font-medium mt-5 p-2 bg-slate-400 text-white rounded-[5px] w-20 hover:bg-slate-300 w-[250px] rounded-full' style={{backgroundColor:'rgb(108,96,240)'}}>
          Submit
        </button>
        <br />
        <button
          type='button'
          onClick={toSignup}
          className='mt-3 p-1 bg-slate-400 text-white rounded-[5px] w-28 hover:bg-slate-300 ' style={{backgroundColor:'rgb(108,96,240)'}}>
          New User?
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
