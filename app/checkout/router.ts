import { createTRPCRouter, publicProcedure } from "@/app/__shared/server/trpc";

import braintree from "braintree";
import z from "zod";

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID as string,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY as string,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY as string,
});

export const checkoutRouter = createTRPCRouter({
  initializeCheckout: publicProcedure.query(async () => {
    const response = await gateway.clientToken.generate({});
    return response.clientToken;
  }),
  formSubmit: publicProcedure
    .input(
      z.object({
        paymentMethodNonce: z.string(),
      })
    )
    .mutation(async ({ input: { paymentMethodNonce } }) => {
      const result = await gateway.transaction.sale({
        amount: "10.00",
        paymentMethodNonce: paymentMethodNonce,
        options: {
          // This option requests the funds from the transaction
          // once it has been authorized successfully
          submitForSettlement: true,
        },
      });
      return result;
    }),
});
export type ProductRouter = typeof checkoutRouter;
