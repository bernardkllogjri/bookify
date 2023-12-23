import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const handler = NextAuth({
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
  ]
})

export { handler as GET, handler as POST }