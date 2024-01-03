"use client";

import CheckoutForm from "../components/CheckoutForm";
import { useCheckoutStore } from "../store";
import { useEffect } from "react";
import { useProductsStore } from "@/app/product/store";

const CheckoutWrapper = ({ braintreeToken }: { braintreeToken: string }) => {
  const { initPaymentProvider, ...checkoutStore } = useCheckoutStore([
    "initPaymentProvider",
    "checkoutWithPaymentProvider",
  ]);
  const productsStore = useProductsStore([
    "getProductsInCartTotalPrice",
    "productsInCart",
    "removeFromCart",
  ]);
  useEffect(
    () => void initPaymentProvider(braintreeToken),
    [initPaymentProvider, braintreeToken]
  );

  return (
    <CheckoutForm
      products={productsStore.productsInCart}
      checkoutWithPaymentProvider={checkoutStore.checkoutWithPaymentProvider}
      removeProductFromCart={productsStore.removeFromCart}
      cartTotalPrice={productsStore.getProductsInCartTotalPrice()}
    />
  );
};

export default CheckoutWrapper;
