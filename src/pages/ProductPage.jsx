import React from 'react';
import ProductList from '../components/ProductList';

const ProductPage = () => {
  return (
    <div className="products-page">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Plants</h1>
      <ProductList />
    </div>
  );
};

export default ProductPage;
