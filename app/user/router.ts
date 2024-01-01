import {
  createTRPCRouter,
  publicProcedure,
} from "@/app/__shared/server/trpc";

import { db } from "@/app/__shared/server/db";

export const userRouter = createTRPCRouter({
  usersList: publicProcedure
    .query(() => {
      return db.user.findMany()
    }),

});
export type UserRouter = typeof userRouter;
