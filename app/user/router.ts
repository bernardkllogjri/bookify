import {
  createTRPCRouter,
  publicProcedure,
} from "@/app/__shared/server/trpc";

export const userRouter = createTRPCRouter({
  usersList: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.user.findMany()
    }),

});
export type UserRouter = typeof userRouter;
