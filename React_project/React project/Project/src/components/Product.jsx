/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';

export const Product = ({ product, cart, setCart }) => {
  const name = product.name.length > 21 ? product.name.substring(0, 20) + '..' : product.name;

  const toggleCart = () => {
    if (cart.some((c) => c.id === product.id)) {
      console.log('Removing from cart:', product);
      setCart(cart.filter((c) => c.id !== product.id));
    } else {
      console.log('Adding to cart:', product);
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product">
      <div className="img">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p ><b>Price Rs: </b>{product.price}</p>
        <p><br></br>Description: {product.description}</p>
        {cart.some((c) => c.id === product.id) ? (
          <button className="btnRemove" onClick={toggleCart}>Remove From Cart</button>
        ) : (
          <button className='btn' onClick={toggleCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
