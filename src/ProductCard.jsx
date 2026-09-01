import React from 'react';
import { useCart } from '../context/CartContext';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <article className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-content">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <p className="product-price">{currency.format(product.price)}</p>
        </div>
        <p className="product-description">{product.description}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCart(product)}
        >
          {isInCart ? 'Add another' : 'Add to cart'}
        </button>
        <p className="cart-feedback" aria-live="polite">
          {isInCart ? 'In your cart' : ''}
        </p>
      </div>
    </article>
  );
}
