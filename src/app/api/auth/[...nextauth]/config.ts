// app/api/auth/[...nextauth]/config.ts
import { authOptions } from './route';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };