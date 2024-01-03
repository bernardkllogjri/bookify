import hostedFields, { HostedFields } from "braintree-web/hosted-fields";

import { api } from "../__shared/utils/trpc/client";
import client from "braintree-web/client";
import { createStore } from "@/app/__shared/store/config";

type State = {
  braintreeClient: HostedFields | null;
};

type Actions = {
  initPaymentProvider: (braintreeToken: string) => void;
  checkoutWithPaymentProvider: () => Promise<void>;
};

export const useCheckoutStore = createStore<State & Actions>(
  "app-storage",
  (set, get) => ({
    braintreeClient: null,
    initPaymentProvider: async (braintreeToken) => {
      const clientInstance = await client.create({
        authorization: braintreeToken,
      });

      const instance = await hostedFields.create({
        client: clientInstance,
        fields: {
          cardholderName: {
            selector: "#card-holder",
            placeholder: "Your full name here",
          },
          number: {
            selector: "#card-number",
            placeholder: "4111 1111 1111 1111",
          },
          cvv: {
            selector: "#cvv",
            placeholder: "123",
          },
          expirationDate: {
            selector: "#expiration-date",
            placeholder: "MM/YYYY",
          },
        },
      });
      set({ braintreeClient: instance });
    },
    checkoutWithPaymentProvider: async () => {
      const data = await get().braintreeClient?.tokenize();
      if (!data || !data.nonce) return;
      const res = await api.checkout.payCheckout.mutate({
        paymentMethodNonce: data.nonce,
      });
      if (!data || !data.nonce) return;
    },
  })
);
