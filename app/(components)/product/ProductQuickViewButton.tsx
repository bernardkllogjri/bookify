"use client";

import { FC } from "react";
import { Product } from "@/app/types/Product";
import { useAppStore } from "@/app/store/app";
import { useProductsStore } from "@/app/store/products";

const ProductQuickViewButton: FC<{ productId: Product["id"] }>  = ({ productId }) => {
  const openQuickView = useAppStore.use.openQuickView();
  const selectProduct = useProductsStore.use.selectProduct();

  return (
    <div className="flex items-end p-4">
      <button
        type="button"
        className="relative z-10 w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-sm text-gray-900 opacity-0 group-hover:opacity-100"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          openQuickView()
          selectProduct(`${productId}`)
        }}
      >
        Quick View
        <span className="sr-only">, Basic Tee 6-Pack </span>
      </button>
    </div>
  );
};

export default ProductQuickViewButton;
