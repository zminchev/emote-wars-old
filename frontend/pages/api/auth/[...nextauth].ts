import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const fetch_url = `http://localhost:1337/api/auth/local`;
        const params = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: credentials?.email,
            password: credentials?.password,
          }),
        };

        let response = await fetch(fetch_url, params);
        const data = await response.json();

        if (response.ok && data) return data;
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: "REALLY_LONG_STRING_FOR_A_SECRET",
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token = {
          username: user.username,
          email: user.email,
          jwtToken: user.jwt,
        };
      }
      return Promise.resolve(token);
    },
    async session({ session, token }: any) {
      session.user.jwt = token.jwtToken;
      session.user.email = token.email;
      session.user.username = token.username;
      return Promise.resolve(session);
    },
  },
  debug: true,
  pages: {
    signIn: "/login",
  },
};
const Auth = (req: NextApiRequest, res: NextApiResponse) => {
  NextAuth(req, res, options);
};

export default Auth;
