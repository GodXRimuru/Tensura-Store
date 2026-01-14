import React from 'react';
import './App.css';

interface NavItem {
  label: string;
  href: string;
}

const App: React.FC = () => {
  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>Tensura Store</h1>
          </div>
          <ul className="navbar-menu">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Tensura Store</h2>
          <p>Discover premium products inspired by the world of That Time I Got Reincarnated as a Slime</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </header>

      {/* Featured Section */}
      <section className="featured-section">
        <h3>Featured Products</h3>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image"></div>
            <h4>Rimuru Collectibles</h4>
            <p>Limited edition collectibles and merchandise</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h4>Clothing & Apparel</h4>
            <p>Premium quality clothing and accessories</p>
          </div>
          <div className="product-card">
            <div className="product-image"></div>
            <h4>Accessories</h4>
            <p>Unique accessories for true fans</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Tensura Store. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#shipping">Shipping Info</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;