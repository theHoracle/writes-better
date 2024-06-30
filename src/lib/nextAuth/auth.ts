import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async redirect({baseUrl, url}) {
      const urlObject = new URL(url, baseUrl)
      const origin = urlObject.searchParams.get("origin")

      if(origin) {
        return origin
      }
      return "/posts"
    }
  }
});
