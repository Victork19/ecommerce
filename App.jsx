import { useState } from 'react';
import Header from './src/Header';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  const [activePage, setActivePage] = useState('products');
  const [lastOrder, setLastOrder] = useState(null);

  function completeOrder(order) {
    setLastOrder(order);
    setActivePage('confirmation');
  }

  function renderPage() {
    if (activePage === 'cart') {
      return <CartPage onNavigate={setActivePage} />;
    }

    if (activePage === 'checkout') {
      return <CheckoutPage onComplete={completeOrder} onNavigate={setActivePage} />;
    }

    if (activePage === 'confirmation') {
      return <ConfirmationPage order={lastOrder} onNavigate={setActivePage} />;
    }

    return <ProductsPage />;
  }

  return (
    <main className="app-shell">
      <Header activePage={activePage} onNavigate={setActivePage} />
      {renderPage()}
    </main>
  );
}
