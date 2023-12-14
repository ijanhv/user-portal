import { connectToDB } from "@/lib/mongoose";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter your email and password");
        }

        connectToDB();

        const user = await User.findOne({
          email: credentials.email
        })


        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrect) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          email: token.email,
          name: token.name,
          age: token.age,
          dateOfBirth: token.dateOfBirth,
          phoneNumber: token.phoneNumber,
          walletAddress: token.walletAddress,
        },
        token 
      };
    },
    async jwt({ token, user, session }) {
      // console.log("JWT CALLBACK", token, user, session);
      if (user) {
        return {
          ...token,
          user
        };
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
