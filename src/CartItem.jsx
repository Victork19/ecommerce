import { useCart } from '../context/CartContext';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <article className="cart-item">
      <img className="cart-item-image" src={item.image} alt="" />
      <div className="cart-item-details">
        <div className="cart-item-heading">
          <div>
            <h2>{item.name}</h2>
            <p>{currency.format(item.price)} each</p>
          </div>
          <strong>{currency.format(item.price * item.quantity)}</strong>
        </div>

        <div className="cart-item-actions">
          <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              aria-label={`Decrease ${item.name} quantity`}
            >
              −
            </button>
            <span aria-live="polite">{item.quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              aria-label={`Increase ${item.name} quantity`}
            >
              +
            </button>
          </div>
          <button
            className="remove-button"
            type="button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}
