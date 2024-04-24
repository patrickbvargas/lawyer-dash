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
        try {
          const { oab, password } = signInSchema.parse(payload);
          const user = await prismaDb.lawyer.findFirstOrThrow({
            where: {
              oabNumber: {
                equals: oab,
                mode: 'insensitive',
              },
            },
          });

          if (!user || !compareSync(password, user.hashedPassword)) {
            throw new Error('Invalid credentials');
          }

          const { id, oabNumber, fullName, remunerationPercent, role } = user;
          const sessionUser: User = {
            id,
            oabNumber,
            fullName,
            remunerationPercent,
            role,
          };

          return sessionUser;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // TODO: not save user role in jwt
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
      // TODO: get updated user role
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
