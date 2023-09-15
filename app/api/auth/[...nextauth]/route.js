import userModel from "@/models/users";
import { connectToDB } from "@/utils/databse";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      Credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          await connectToDB();
          const user = await userModel.findOne({ username });

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) return null;
 
          return user;
        } catch (error) {
          console.log("Unable to login", error);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
