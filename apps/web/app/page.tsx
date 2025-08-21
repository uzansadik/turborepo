import React from 'react';
import CreateProduct from './create-product/create-product';
import Products from './create-product/products';

export default function page() {
  return (
    <div>
      <CreateProduct />
      <Products />
    </div>
  );
}
