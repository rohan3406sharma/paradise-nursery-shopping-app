import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';

import monstera from "../assets/images/monstera.jpg";
import fiddleLeafFig from "../assets/images/fiddle-leaf-fig.jpg";
import zzPlant from "../assets/images/zz-plant.jpg";
import roseBush from "../assets/images/rose-bush.jpg";
import lavender from "../assets/images/lavender.jpg";
import jasmine from "../assets/images/jasmine.jpg";
import aloeVera from "../assets/images/aloe-vera.jpg";
import jadePlant from "../assets/images/jade-plant.jpg";
import echeveria from "../assets/images/echeveria.jpg";
import snakePlant from "../assets/images/snake-plant.jpg";
import spiderPlant from "../assets/images/spider-plant.jpg";
import peaceLily from "../assets/images/peace-lily.jpg";

const plantsData = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Monstera", price: 499, description: "Classic tropical indoor plant.", image: monstera },
      { id: 2, name: "Fiddle Leaf Fig", price: 699, description: "Popular statement plant.", image: fiddleLeafFig },
      { id: 3, name: "ZZ Plant", price: 399, description: "Extremely low maintenance.", image: zzPlant },
      { id: 10, name: "Snake Plant", price: 299, description: "Excellent air purifier.", image: snakePlant },
      { id: 11, name: "Spider Plant", price: 199, description: "Fast growing and adaptable.", image: spiderPlant },
      { id: 12, name: "Peace Lily", price: 349, description: "Elegant white blooms.", image: peaceLily }
    ]
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 4, name: "Rose Bush", price: 299, description: "Beautiful blooming roses.", image: roseBush },
      { id: 5, name: "Lavender", price: 199, description: "Aromatic purple flowers.", image: lavender },
      { id: 6, name: "Jasmine", price: 249, description: "Sweet smelling climber.", image: jasmine },
      { id: 13, name: "Outdoor Fern", price: 150, description: "Lush green outdoor plant.", image: monstera },
      { id: 14, name: "Hibiscus", price: 300, description: "Vibrant tropical flowers.", image: roseBush },
      { id: 15, name: "Bougainvillea", price: 450, description: "Colorful climbing plant.", image: lavender }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 149, description: "Medicinal succulent.", image: aloeVera },
      { id: 8, name: "Jade Plant", price: 199, description: "Symbol of good luck.", image: jadePlant },
      { id: 9, name: "Echeveria", price: 99, description: "Rosette forming succulent.", image: echeveria },
      { id: 16, name: "Cactus", price: 120, description: "Spiky desert survivor.", image: aloeVera },
      { id: 17, name: "Zebra Plant", price: 180, description: "Striped succulent.", image: jadePlant },
      { id: 18, name: "String of Pearls", price: 220, description: "Trailing succulent.", image: echeveria }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-list-container">
      {plantsData.map((categoryData, index) => (
        <div className="category-section" key={index}>
          <h2>{categoryData.category}</h2>
          <div className="plant-list">
            {categoryData.plants.map(plant => {
              const isAdded = cartItems.some(item => item.id === plant.id);
              return (
                <div className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p><strong>₹{plant.price}</strong></p>
                  <button 
                    className="add-to-cart-btn" 
                    onClick={() => handleAddToCart(plant)}
                    disabled={isAdded}
                  >
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
