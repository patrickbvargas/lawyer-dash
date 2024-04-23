import { prismaDb } from '@/lib/prisma';
import { compareSync } from '@/lib/bcrypt';
import { signInSchema } from '@/schemas/auth';
import nextAuth from 'next-auth';
import NextAuth from 'next-auth/next';
import { useSession } from 'next-auth/react';
import { NextAuthOptions, User } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { equal } from 'assert';

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
        if (!credentials) return null;

        const lawyer = await prismaDb.lawyer.findFirst({
          where: {
            oabNumber: {
              equals: credentials.oab,
              mode: 'insensitive',
            },
          },
        });
        if (!lawyer) return null;

        if (!compareSync(credentials.password, lawyer.passwordHash))
          return null;

        const user: User = {
          id: lawyer.id,
          oabNumber: lawyer.oabNumber,
          fullName: lawyer.fullName,
          remunerationPercent: lawyer.remunerationPercent,
          role: lawyer.role,
        };

        return user;
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

export {
  NextAuth,
  nextAuth,
  authConfig,
  signIn,
  signOut,
  getSessionInfo,
  useSession,
};
