import GitHub from "@auth/core/providers/github"
import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const { handlers: { GET, POST } } =  NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [ GitHub ]
});
