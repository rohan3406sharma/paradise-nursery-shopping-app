import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="landing-page">
            <div className="landing-content">
              <header>
                <h1>Welcome to Paradise Nursery</h1>
              </header>
              <p>Paradise Nursery is your premier online destination for high-quality indoor and outdoor plants.</p>
              <Link to="/products">
                <button className="get-started-btn">Get Started</button>
              </Link>
            </div>
          </div>
        } />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
