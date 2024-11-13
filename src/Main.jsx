import React from 'react';
import './App.css';
import Header from './pages/Header';
import ProductGrid from './pages/ProductGrid';
// import Footer from './pages/Footer';

function Main() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="hero-section">
          <h1>Welcome to ShopEase</h1>
          <p>Discover the latest trends at unbeatable prices.</p>
        </div>
        <ProductGrid />
      </main>
    </div>
  );
}

export default Main;
