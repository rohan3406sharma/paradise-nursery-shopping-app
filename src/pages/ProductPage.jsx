import React from 'react';
import PlantList from '../components/PlantList';

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

// Sample data with at least 3 plants per category
const plantsData = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Monstera", price: 499, description: "Classic tropical indoor plant.", image: monstera },
      { id: 2, name: "Fiddle Leaf Fig", price: 699, description: "Popular statement plant.", image: fiddleLeafFig },
      { id: 3, name: "ZZ Plant", price: 399, description: "Extremely low maintenance.", image: zzPlant }
    ]
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 4, name: "Rose Bush", price: 299, description: "Beautiful blooming roses.", image: roseBush },
      { id: 5, name: "Lavender", price: 199, description: "Aromatic purple flowers.", image: lavender },
      { id: 6, name: "Jasmine", price: 249, description: "Sweet smelling climber.", image: jasmine }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 149, description: "Medicinal succulent.", image: aloeVera },
      { id: 8, name: "Jade Plant", price: 199, description: "Symbol of good luck.", image: jadePlant },
      { id: 9, name: "Echeveria", price: 99, description: "Rosette forming succulent.", image: echeveria }
    ]
  },
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 10, name: "Snake Plant", price: 299, description: "Excellent air purifier.", image: snakePlant },
      { id: 11, name: "Spider Plant", price: 199, description: "Fast growing and adaptable.", image: spiderPlant },
      { id: 12, name: "Peace Lily", price: 349, description: "Elegant white blooms.", image: peaceLily }
    ]
  }
];

const ProductPage = () => {
  return (
    <div className="products-page">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Plants</h1>
      {plantsData.map((categoryData, index) => (
        <PlantList 
          key={index} 
          title={categoryData.category} 
          plants={categoryData.plants} 
        />
      ))}
    </div>
  );
};

export default ProductPage;
