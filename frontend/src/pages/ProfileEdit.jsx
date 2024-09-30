import React, { useState } from 'react';
import axios from 'axios';

const ProfileEdit = ({ userId }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]); // Get the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setUploadMessage('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage); // Append the image file to the formData

    try {
      const response = await axios.put(`http://localhost:3000/upload/66f6498df40ff2cb25a3aa3c`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadMessage(`Success: ${response.data}`);
    } catch (error) {
      console.error(error);
      setUploadMessage('Error uploading image.');
    }
  };

  return (
    <div>
      <h2>Upload Image for User</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload Image</button>
      </form>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

export default ProfileEdit;
