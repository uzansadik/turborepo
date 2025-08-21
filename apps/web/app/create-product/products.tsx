import React from 'react';
import { Product } from '@repo/types';

export default async function Products() {
  const data = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ['products'] },
  });
  const products: Product[] = await data.json();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
