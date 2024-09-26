import React, { useState } from 'react';

const FeedbackForm = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzFNi1XvdIynhUvragPHw2GtzTgSb45SEfAwX2vpPOQgnJFJ8wLZ1aZIFqdEFI8WN5vjQ/exec';
  const [feedback, setFeedback] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('feedback', feedback);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        setStatusMessage('Feedback submitted successfully!');
        setFeedback(''); // Clear the input field after successful submission
      })
      .catch(error => {
        setStatusMessage('Error submitting feedback!');
        console.error('Error!', error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name="submit-to-google-sheet" >
        <label htmlFor="feedback">Your Feedback:</label>
        <input
          type="text"
          id="feedback"
          name="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
