/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = ({ isSignUp, setPassword, password, username, setUsername, setIsSignUp, email, setEmail, confirmPassword, setConfirmPassword }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      // Handle sign-up logic here
      console.log('Sign Up - Username:', username);
      console.log('Sign Up - Email:', email);
      console.log('Sign Up - Password:', password);
      console.log('Sign Up - Confirm Password:', confirmPassword);
      
      navigate('/Home');   
    } else {
      // Handle sign-in logic here
      console.log('Sign In - Username:', username);
      console.log('Sign In - Password:', password);
      navigate('/Home');  
    }
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        {isSignUp && (
          <>
          
            <label htmlFor="email"><br></br>Email<br></br></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="switch1" type="submit">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <button className="switch2" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Sign In' : 'Sign Up'}
      </button>
    </div>
  );
};