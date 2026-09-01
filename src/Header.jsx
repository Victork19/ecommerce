import React from 'react';
import { useCart } from '../context/CartContext';

export default function Header({ activePage, onNavigate }) {
  const { cartCount } = useCart();

  return (
    <header className="site-header">
      <button
        className="brand-button"
        type="button"
        onClick={() => onNavigate('products')}
        aria-label="Go to Shoply products"
      >
        <span className="eyebrow">Simple storefront</span>
        <span className="brand-name">Shoply</span>
      </button>

      <nav className="site-nav" aria-label="Main navigation">
        <button
          className={activePage === 'products' ? 'nav-button active' : 'nav-button'}
          type="button"
          onClick={() => onNavigate('products')}
          aria-current={activePage === 'products' ? 'page' : undefined}
        >
          Products
        </button>
        <button
          className={activePage === 'cart' ? 'nav-button active' : 'nav-button'}
          type="button"
          onClick={() => onNavigate('cart')}
          aria-current={activePage === 'cart' ? 'page' : undefined}
        >
          Cart <span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}
