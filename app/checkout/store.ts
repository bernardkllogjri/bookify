import { createSelectors, createStore } from "@/app/__shared/store/config";
import hostedFields, { HostedFields } from "braintree-web/hosted-fields";

import { TRPCClientErrorLike } from "@trpc/client";
import { UseTRPCMutationResult } from "@trpc/react-query/shared";
import client from "braintree-web/client";
import { inferProcedureInput } from "@trpc/server";
import { inferTransformedProcedureOutput } from "@trpc/server/shared";

type State = {
    braintreeClient: HostedFields | null;
};

type Actions = {
  initPaymentProvider: (braintreeToken: string) => void;
  checkoutWithPaymentProvider: (call: UseTRPCMutationResult<
    inferTransformedProcedureOutput<any>,
    TRPCClientErrorLike<any>,
    inferProcedureInput<any>,
    any
  >) => () => void;
};

export const useCheckoutStore = createSelectors(
  createStore<State & Actions>("app-storage", (set, get) => ({
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
    checkoutWithPaymentProvider: (call) => async () => {
        const data = await get().braintreeClient?.tokenize()
        if(!data || !data.nonce) return
        const res = await call.mutate({ paymentMethodNonce: data.nonce })
        console.warn({ call, res });
    }
  }))
);
