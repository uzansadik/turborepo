import React from 'react';
import { Product } from '@repo/types';

export const dynamic = 'force-dynamic'; // ❗ build-time yerine runtime’da fetch

export default async function Products() {
  const apiUrl = process.env.API_URL; // server tarafında NEXT_PUBLIC gerekmez

  const res = await fetch(`${apiUrl}/products`, {
    cache: 'no-store', // veriyi her istekte güncel çeker
    next: { tags: ['products'] },
  });

  if (!res.ok) {
    // build sırasında API kapalıysa bile hata fırlatma
    return <div>API not available</div>;
  }

  const products: Product[] = await res.json();

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
