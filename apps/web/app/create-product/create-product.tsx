import React from 'react';
import createProduct from './actions/create-product';

export default function CreateProduct() {
  return (
    <div>
      <form action={createProduct}>
        <label
          htmlFor='name
        '
        >
          Name:{' '}
        </label>
        <input type='text' name='name' placeholder='Product Name' />
        <label htmlFor='price'>Price: </label>
        <input type='number' name='price' placeholder='Product Price' />
        <button type='submit'>Create Product</button>
      </form>
    </div>
  );
}
