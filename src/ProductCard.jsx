import { useCart } from '../context/CartContext';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

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
          Add to cart
        </button>
      </div>
    </article>
  );
}
