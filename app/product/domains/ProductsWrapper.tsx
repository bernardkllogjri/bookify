'use client'

import { Product } from "../types";
import ProductItem from "../components/ProductItem";
import { useEffect } from "react";
import { useProductsStore } from "../store";

const ProductsWrapper = ({ products }: { products: Product[] }) => {
  const setProducts = useProductsStore.use.setProducts()
  useEffect(() => void setProducts(products), [setProducts, products])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="sr-only">Products</h2>
        {products && products.length && (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsWrapper;
