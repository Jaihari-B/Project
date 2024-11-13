import React from 'react';
import './Home.css';
import { toast } from 'react-hot-toast';

function Home() {
  const handleCart = () => {
    toast.success('Added to Cart');
  }
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop shop for all things awesome!</p>
        <button>Start Shopping</button>
      </section>
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
            <button onClick={handleCart}>Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
