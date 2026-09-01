import { useCart } from '../context/CartContext';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const SHIPPING_COST = 5;

export default function OrderSummary({ onCheckout, showCheckoutButton = true }) {
  const { cartTotal, cartCount } = useCart();
  const shipping = cartCount > 0 ? SHIPPING_COST : 0;
  const total = cartTotal + shipping;

  return (
    <aside className="order-summary" aria-labelledby="summary-title">
      <h2 id="summary-title">Order summary</h2>
      <dl>
        <div>
          <dt>Subtotal</dt>
          <dd>{currency.format(cartTotal)}</dd>
        </div>
        <div>
          <dt>Delivery</dt>
          <dd>{shipping === 0 ? '—' : currency.format(shipping)}</dd>
        </div>
        <div className="summary-total">
          <dt>Total</dt>
          <dd>{currency.format(total)}</dd>
        </div>
      </dl>

      {showCheckoutButton && (
        <button
          className="primary-button"
          type="button"
          onClick={onCheckout}
          disabled={cartCount === 0}
        >
          Proceed to checkout
        </button>
      )}
    </aside>
  );
}
