// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Assuming your CSS file is named HomePage.css
import menlogo from '../assets/men.png'
import womenlogo from '../assets/women.png'
import kidslogo from '../assets/kids.png'
const Home = () => {
  return (
    <div className="homepage">
      <Link to="/men" className="category-link">
        <img src={menlogo} alt="Men" className="category-logo" />
        <p>Men</p>
      </Link>
      <Link to="/women" className="category-link">
        <img src={womenlogo} alt="Women" className="category-logo" />
        <p>Women</p>
      </Link>
      <Link to="/kids" className="category-link">
        <img src={kidslogo} alt="Kids" className="category-logo" />
        <p>Kids</p>
      </Link>
      
    </div>
  );
};

export default Home;
