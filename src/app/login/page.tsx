'use client';

import LoginForm from '../components/auth/LoginForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If user is already authenticated, redirect to dashboard
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gray-50">
      <LoginForm />
    </div>
  );
}