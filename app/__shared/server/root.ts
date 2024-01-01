import { checkoutRouter } from "@/app/checkout/router";
import { createTRPCRouter } from "./trpc";
import { productRouter } from "@/app/product/router";
import { userRouter } from "@/app/user/router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  product: productRouter,
  checkout: checkoutRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
