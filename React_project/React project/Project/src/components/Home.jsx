/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import data from '../assets/products.json';
import { Product } from './Product';
import './Home.css';

export const Home = ({ cart, setCart }) => {
  const [products] = useState(data);

  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};
