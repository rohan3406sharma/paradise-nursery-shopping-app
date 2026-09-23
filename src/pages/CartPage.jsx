import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p>Your cart is empty.</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Items: {items.length}</p>
            <p>Total Quantity: {totalQuantity}</p>
            <p><strong>Grand Total: ₹{totalAmount}</strong></p>
            
            <button className="checkout-btn" onClick={() => alert("Coming soon!")}>
              Checkout
            </button>
            <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
