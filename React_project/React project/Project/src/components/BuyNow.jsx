import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BuyNow.css'; // Ensure you have styles for this component

export const BuyNow = () => {
  const location = useLocation();
  const { cart = [] } = location.state || {}; // Safely access cart
  const [userDetails, setUserDetails] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderProgress, setOrderProgress] = useState(0); // Start at 0%
  const [paymentMethod, setPaymentMethod] = useState('credit'); // Default payment method
  const navigate = useNavigate();

  // Calculate total price from the cart items
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderProgress(25); // Start processing

    const interval = setInterval(() => {
      setOrderProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setOrderPlaced(true);
          setTimeout(() => navigate('/View'), 2000); // Redirect after 2 seconds
          return 100;
        }
        return prev + 25; // Increment progress
      });
    }, 1000); // Simulate order processing
  };

  // Calculate approximate delivery date (for demo purposes, adding 3 days)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  return (
    <div className="buy-now-container">
      <h2>Buy Now</h2>
      <h3>Total Amount: Rs {total}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={userDetails.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>

        <button type="submit">Pay Online</button>
      </form>

      <div className="order-status">
        <h3>Order Progress: {orderProgress}%</h3>
        <div className="progress-tracker">
          <div
            className="progress-line"
            style={{ width: `${orderProgress}%` }}
          />
        </div>
      </div>

      {orderPlaced && (
        <div className="order-confirmation">
          <h3>Order Placed!</h3>
          <p>Approximate Delivery Date: {deliveryDate.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};
