import { createTRPCRouter, publicProcedure } from "../__shared/server/trpc";

export const productRouter = createTRPCRouter({
  productsList: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      include: { images: true, breadcrumbs: true, reviews: true, highlights: true },
    });
  }),
});
export type ProductRouter = typeof productRouter;
