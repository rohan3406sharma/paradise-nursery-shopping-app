import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  
  // Check if this plant is already in the cart
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p><strong>₹{plant.price}</strong></p>
      <button 
        className="add-to-cart-btn" 
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? 'Added' : 'Add To Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
