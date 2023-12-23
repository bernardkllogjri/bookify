import GitHub from "@auth/core/providers/github"
import NextAuth from "next-auth"

export const { handlers: { GET, POST } } =  NextAuth({ providers: [ GitHub ] });
