import { useState } from 'react';
import Header from './src/Header';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  const [activePage, setActivePage] = useState('products');

  return (
    <main className="app-shell">
      <Header activePage={activePage} onNavigate={setActivePage} />

      {activePage === 'products' ? (
        <ProductsPage />
      ) : (
        <section className="placeholder-card" aria-labelledby="placeholder-title">
          <p className="eyebrow">Phase 3</p>
          <h2 id="placeholder-title">Your cart is coming next.</h2>
          <p>
            The catalog is ready. Cart items are already being tracked; the
            cart screen will be connected in the next phase.
          </p>
          <button
            className="secondary-button"
            type="button"
            onClick={() => setActivePage('products')}
          >
            Continue shopping
          </button>
        </section>
      )}
    </main>
  );
}
