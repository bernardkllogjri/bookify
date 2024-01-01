import CheckoutForm from "./components/CheckoutForm";
import { api } from "@/app/__shared/utils/trpc/server";

const Checkout = async () => {
  const clientToken = await api.checkout.initializeCheckout.query()
  
  return <CheckoutForm braintreeToken={clientToken} />;
};

export default Checkout;
