/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Profile.css';

export const Profile = ({ username, email }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};
