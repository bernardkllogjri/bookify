import CheckoutWrapper from "./wrappers/CheckoutWrapper";
import { api } from "@/app/__shared/utils/trpc/server";

const Checkout = async () => {
  const clientToken = await api.checkout.initializeCheckout.query()
  
  return <CheckoutWrapper braintreeToken={clientToken} />;
};

export const dynamic = 'force-static'
export default Checkout;
