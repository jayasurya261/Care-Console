import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './View.css';

export const View = ({ cart, setCart }) => {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => acc + parseInt(curr.price) * curr.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    setCart(cart.map((product) => 
      product.id === productId ? { ...product, quantity: quantity } : product
    ));
  };

  return (
    <>
      <h2 className="cart-heading">Cart Products</h2>
      <div className="Cart-container">
        {cart.map((product) => (
          <div className="Cart-product" key={product.id}>
            <div className="img">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="Cart-details">
              <h3>{product.name}</h3>
              <p>Price Rs: {product.price}</p>
              <div>
                <label>Quantity: </label>
                <input 
                  type="number" 
                  value={product.quantity} 
                  min="1" 
                  onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
              </div>
            </div>
          </div>
        ))}
        <h2 className="cart-amt">Total amount Rs: {Total}</h2>
        
      
        <Link to="/buy-now" state={{ cart, total: Total }} className="button">
          <div >
            <div className="text">Buy Now</div>
            <span className="icon">
              <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
              </svg>
            </span>
          </div>
        </Link>
         {/* <Link to="/buy-now" state={{ cart, total: Total }} data-tooltip={Price: Rs ${Total}} className="button">
          <div className="button-wrapper">
            <div className="text">Buy Now</div>
            <span className="icon">
              <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
              </svg>
            </span>
          </div>
        </Link> */}
        
      </div>
    </>
  );
};
