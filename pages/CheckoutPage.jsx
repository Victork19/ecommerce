import React from 'react';
import { useCart } from '../context/CartContext';
import OrderSummary from '../src/OrderSummary';

export default function CheckoutPage({ onComplete, onNavigate }) {
  const { cart, cartTotal, clearCart } = useCart();
  const total = cartTotal + (cart.length > 0 ? 5 : 0);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    clearCart();
    onComplete({
      customerName: formData.get('name'),
      total,
    });
  }

  if (cart.length === 0) {
    return (
      <section className="empty-state" aria-labelledby="empty-checkout-title">
        <p className="eyebrow">Checkout</p>
        <h1 id="empty-checkout-title">There is nothing to check out.</h1>
        <p>Add an item to your cart before continuing.</p>
        <button
          className="primary-button compact-button"
          type="button"
          onClick={() => onNavigate('products')}
        >
          Browse products
        </button>
      </section>
    );
  }

  return (
    <section className="checkout-page" aria-labelledby="checkout-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1 id="checkout-title">Almost yours.</h1>
        </div>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Customer details</h2>
          <label>
            Full name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Address
            <input name="address" type="text" autoComplete="street-address" required />
          </label>
          <div className="form-row">
            <label>
              City
              <input name="city" type="text" autoComplete="address-level2" required />
            </label>
            <label>
              Postal code
              <input name="postalCode" type="text" autoComplete="postal-code" required />
            </label>
          </div>
          <button className="primary-button" type="submit">
            Place order
          </button>
        </form>

        <OrderSummary showCheckoutButton={false} />
      </div>
    </section>
  );
}
