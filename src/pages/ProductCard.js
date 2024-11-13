import React from 'react';
import toast from 'react-hot-toast';

function ProductCard({ product }) {
  const handleCart = () => {
    toast.success('Product added to cart!');
  }
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
