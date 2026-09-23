import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Subtotal: ₹{item.totalPrice}</p>
        
        <div className="quantity-controls">
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
        </div>
        
        <button 
          className="remove-btn" 
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItem;
