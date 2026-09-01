import React from 'react';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ConfirmationPage({ order, onNavigate }) {
  return (
    <section className="confirmation-card" aria-labelledby="confirmation-title">
      <div className="confirmation-icon" aria-hidden="true">✓</div>
      <p className="eyebrow">Order confirmed</p>
      <h1 id="confirmation-title">
        Thanks{order?.customerName ? `, ${order.customerName}` : ''}.
      </h1>
      <p>
        Your demo order has been placed successfully. No payment was taken.
      </p>
      {order && <strong>Total: {currency.format(order.total)}</strong>}
      <button
        className="primary-button compact-button"
        type="button"
        onClick={() => onNavigate('products')}
      >
        Continue shopping
      </button>
    </section>
  );
}
