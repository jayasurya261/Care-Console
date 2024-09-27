/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ cart }) => {
  return (
    <div className='navbar'>

        <div className='logo'><b><i>Pharmacy</i></b></div>
        <ul>
            <li>
                 <Link to={"/Home"}>Home /</Link>
            </li>
            <li>
                 <Link to={"/View"}>
                 <span className='cart-count'>{cart.length} </span>
                  ViewCart /</Link>
            </li>
            <li>
              <Link to={"/Profile"}>
              <img src='profile pic.jpeg' alt=''/>
              </Link>
            </li>
            
           
        </ul>
    </div>
  );
}
