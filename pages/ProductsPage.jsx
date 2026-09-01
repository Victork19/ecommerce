import { products } from '../data/products';
import ProductList from '../src/ProductList';

export default function ProductsPage() {
  return (
    <section className="products-page" aria-labelledby="products-title">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Thoughtfully selected essentials</p>
          <h1 id="products-title">Find something useful.</h1>
        </div>
        <p className="product-count">{products.length} products</p>
      </div>

      <ProductList products={products} />
    </section>
  );
}
