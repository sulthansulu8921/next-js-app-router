import { ProductService } from '@/app/services/products-services'
import React from 'react'
import ProductCard from '../product-card/ProductCard';

export default async function ProductList() {
    var products = await ProductService.getProducts();
  return (
    <div className="d-flex flex-wrap gap-3 ">
              {products.map((p: any) => (
                <ProductCard key={p.id} product={p}/>
              ))}
    </div>
  )
}
