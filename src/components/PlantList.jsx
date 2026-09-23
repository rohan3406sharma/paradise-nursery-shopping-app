import React from 'react';
import PlantCard from './PlantCard';

const PlantList = ({ title, plants }) => {
  return (
    <div className="category-section">
      <h2>{title}</h2>
      <div className="plant-list">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default PlantList;
