import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
// import './HomePage.css';

const HomePage = () => {
  const { themeStyles } = useTheme();

  return (
    <div className={`home-container ${themeStyles}`}>
      <h1>Welcome to the E-Commerce Store</h1>
      <p>Browse our products and enjoy shopping!</p>
    </div>
  );
};

export default HomePage;
