import React, { useEffect, useState } from "react";
import { images } from "../assets/images";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Header = () => {
  const [logged, setLogged] = useState(false);
  const [email, setUserEmail] = useState('');
  const [loginType, setLoginType] = useState(true);
  const navigate = useNavigate();

  // Use useEffect to check localStorage and set loginType without causing infinite renders
   // Empty dependency array to run only once on mount

  function appointments() {
    const userId = localStorage.getItem('userId');
    console.log(userId);

    axios
      .get(`http://localhost:3000/users/my-profile?userId=${userId}`)
      .then((response) => {
        setUserEmail(response.data.data.email);
        console.log(email);
        navigate(`/my-appointments/${email}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        setLogged(true);
        console.log(logged);
      }
    }, 300); // Refresh every 300ms

    return () => clearInterval(interval);
  }, [logged]);
  useEffect(() => {
    const interval = setInterval(() => {
      const login = localStorage.getItem('login-type');
    if (login === "user") {
      setLoginType(true);
      console.log(loginType)
    }
    if(login ==="admin"){
      setLoginType(false);
      console.log(loginType)
    }
    }, 300); // Refresh every 300ms

    return () => clearInterval(interval);
  }, [loginType]);
  

  function logout() {
    setLogged(false);
    navigate('/');
    localStorage.removeItem('userId');
    localStorage.removeItem('login-type');
    setLoginType(true);

  }

  function myProfile() {
    navigate('/my-profile');
  }

  return (
    <div className="flex lg:space-x-[600px]  pb-2 mb-10 " style={{backgroundColor:'#4338ca'}}>
      <div>
        <img className="w-44 pl-20 " src={images.logo} alt="" />
      </div>
      {loginType ?
      <div>
        <ul className="flex mt-12 ">
          {
            logged ? (
              <div className="flex">
                <li className="mr-8 hidden lg:block">
                  <Link to="/">
                    <p className="text-white hover:scale-125 text-[18px]">Home</p>
                  </Link>
                </li>
                <li className="mr-8 hidden lg:block">
                  <Link to="/appointment">
                    < p className="text-white hover:scale-125 text-[18px]">Book Appointment</p>
                  </Link>
                </li>
                <li className="mr-8 hidden lg:block">
                  <Link to="http://localhost:5678/Home">
                    < p className="text-white hover:scale-125 text-[18px]">Pharmacy</p>
                  </Link>
                </li>
                <li className="mr-8 hidden lg:block">
                  <Link to="/about">
                    <p className="text-white hover:scale-125 text-[18px]">About Us</p>
                  </Link>
                </li>
                <li className="mr-8 hidden lg:block">
                  <p className="cursor-pointer text-white hover:scale-125 text-[18px]"  onClick={() => appointments()}>My Appointments</p>
                </li>
                <li className="mr-8 hidden lg:block">
                  <Link to="/contact">
                    <p className="text-white hover:scale-125 text-[18px]">Contact Us</p>
                  </Link>
                </li>
                <li className="mr-8 hidden lg:block">
                  <Link to="/ai">
                    <p className="text-white hover:scale-125 text-[18px]">Care AI</p>
                  </Link>
                </li>
              </div>
            ) : ""
          }
          <li>
            {logged ? (
              <div className="flex items-center gap-2 cursor-pointer group relative">
                <img className="w-8 " src={images.profile} alt="" />
                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 text-white" style={{backgroundColor:'#7da0f9'}}>
                    <p
                      onClick={myProfile}
                      className="hover:text-black cursor-pointer"
                    >
                      My Profile
                    </p>
                    <p
                      onClick={() => { logout() }}
                      className="hover:text-black cursor-pointer"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/signup">
                <p className="ml-[500px] bg-slate-200 p-2 rounded-[10px] -m-2">
                  Create Account
                </p>
              </Link>
            )}
          </li>
        </ul>
      </div>
      : <div>
        <Link to="/alert">
        <button className="ml-[480px] bg-red-600 text-white p-3 rounded-[10px] w-[90px]">SOS</button>
        </Link>
        <button className="mt-10 ml-[50px] p-3 bg-slate-200 rounded-[10px]" onClick={()=>{logout()}}>Logout</button>
        <Link to={'/inventory-chart'}>
        <button className="mt-10 ml-[50px] p-3 bg-slate-200 rounded-[10px]" >Inventory</button>
        </Link>
        </div>}
    </div>
  );
};

export default Header;
