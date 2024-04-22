import { signInSchema } from '@/schemas/auth';
import NextAuth from 'next-auth/next';
import nextAuth from 'next-auth';
import { NextAuthOptions, User } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;

const authConfig: NextAuthOptions = {
  session: {
    // TODO: update to slate session in the end of the day
    maxAge: 30 * ONE_DAY_IN_SECONDS,
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        oab: { type: 'text', placeholder: 'RS000000' },
        password: { type: 'password' },
      },
      async authorize(payload) {
        const credentials = signInSchema.parse(payload);

        if (credentials.oab !== 'a') return null;

        const user: User = {
          id: 'clulzf6kf000108l7ajja6dpi',
          oabNumber: 'RS0022334',
          fullName: 'Fulano da Silva',
          remunerationPercent: 0.3,
          role: 'ADMIN',
        };

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.fullName = user.fullName;
        token.oabNumber = user.oabNumber;
        token.remunerationPercent = user.remunerationPercent;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.fullName = token.fullName;
        session.user.oabNumber = token.oabNumber;
        session.user.remunerationPercent = token.remunerationPercent;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

async function getSessionInfo() {
  return await getServerSession(authConfig);
}

export { NextAuth, nextAuth, authConfig, signIn, signOut, getSessionInfo };
