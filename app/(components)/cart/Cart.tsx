"use client";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useAppStore } from "@/app/store/app";
import { useProductsStore } from "@/app/store/products";

const Cart = () => {
  const openCartDrawer = useAppStore.use.openCartDrawer();
  const productsInCartCount = useProductsStore.use.productsInCart()?.length;

  return (
    <button
      onClick={openCartDrawer}
      className="group -m-2 flex items-center p-2"
    >
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      <span  className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
        {productsInCartCount}
      </span>
      <span className="sr-only">items in cart, view bag</span>
    </button>
  );
};

export default Cart;
