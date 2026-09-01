import { useCart } from '../context/CartContext';
import CartItem from '../src/CartItem';
import OrderSummary from '../src/OrderSummary';

export default function CartPage({ onNavigate }) {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-state" aria-labelledby="empty-cart-title">
        <p className="eyebrow">Shopping cart</p>
        <h1 id="empty-cart-title">Your cart is empty.</h1>
        <p>Add something from the catalog and it will appear here.</p>
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
    <section className="cart-page" aria-labelledby="cart-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h1 id="cart-title">Review your items.</h1>
        </div>
        <p className="product-count">{cart.length} unique items</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <OrderSummary onCheckout={() => onNavigate('checkout')} />
      </div>
    </section>
  );
}
