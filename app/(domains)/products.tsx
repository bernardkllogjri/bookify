'use client'

import { Product } from "../types/Product";
import ProductItem from "../(components)/product/ProductItem";
import { useProductsStore } from "../store/products";

const Products = () => {
  const products: Product[] = useProductsStore((state) => state.products);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
