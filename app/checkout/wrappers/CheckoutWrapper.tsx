"use client";

import CheckoutForm from "../components/CheckoutForm";
import { useCheckoutStore } from "../store";
import { useEffect } from "react";
import { useFormStore } from "@/app/forms/store";
import { useProductsStore } from "@/app/product/store";

const CheckoutWrapper = ({ braintreeToken }: { braintreeToken: string }) => {
  const { initPaymentProvider } = useCheckoutStore(["initPaymentProvider"]);
  const { setInputError } = useFormStore(["setInputError"])
  const productsStore = useProductsStore([
    "getProductsInCartTotalPrice",
    "productsInCart",
    "removeFromCart",
  ]);
  useEffect(
    () => void initPaymentProvider(braintreeToken, setInputError),
    [initPaymentProvider, braintreeToken, setInputError]
  );

  return (
    <CheckoutForm
      products={productsStore.productsInCart}
      removeProductFromCart={productsStore.removeFromCart}
      cartTotalPrice={productsStore.getProductsInCartTotalPrice()}
    />
  );
};

export default CheckoutWrapper;
