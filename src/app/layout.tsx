// app/layout.tsx
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './lib/auth';
import Providers from './provider';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Digital Identity Heritage Vault',
    template: '%s | Digital Identity Heritage Vault',
  },
  description: 'Securely store, preserve, and share your family history, traditions, and cultural heritage for generations to come.',
  keywords: ['heritage', 'family history', 'cultural preservation', 'digital vault', 'family legacy'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Digital Identity Heritage Vault',
    description: 'Preserve your cultural heritage for future generations',
    siteName: 'Digital Identity Heritage Vault',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Identity Heritage Vault',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Identity Heritage Vault',
    description: 'Preserve your cultural heritage for future generations',
    images: ['/images/og-image.jpg'],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Providers session={session}>
          <Header session={session} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

// Header component (can be moved to separate file if preferred)
async function Header({ session }: { session: any }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <Link href="/" className="flex items-center">
          <svg className="w-8 h-8 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <span className="text-xl font-bold text-gray-900">DIHV</span>
        </Link>
        
        <nav className="hidden space-x-10 md:flex">
          <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
          <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">Features</Link>
          <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</Link>
          <Link href="/help" className="text-base font-medium text-gray-500 hover:text-gray-900">Help</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-gray-900">Dashboard</Link>
              <Link href="/api/auth/signout" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Sign Out</Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-base font-medium text-gray-500 hover:text-gray-900">Sign In</Link>
              <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">Sign Up</Link>
            </>
          )}
          <button className="block md:hidden" aria-label="Open navigation menu">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

// Footer component (can be moved to separate file if preferred)
function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-base hover:text-white">Blog</Link></li>
              <li><Link href="/help" className="text-base hover:text-white">Help Center</Link></li>
              <li><Link href="/guides" className="text-base hover:text-white">User Guides</Link></li>
              <li><Link href="/community" className="text-base hover:text-white">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-base hover:text-white">Blog</Link></li>
              <li><Link href="/privacy" className="text-base hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-base hover:text-white">Cookie Policy</Link></li>
              <li><Link href="/compliance" className="text-base hover:text-white">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-base hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-base hover:text-white">Cookie Policy</Link></li>
              <li><Link href="/compliance" className="text-base hover:text-white">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-base hover:text-white">Contact Us</Link></li>
              <li><Link href="https://twitter.com/" className="text-base hover:text-white">Twitter</Link></li>
              <li><Link href="https://facebook.com/" className="text-base hover:text-white">Facebook</Link></li>
              <li><Link href="https://linkedin.com/" className="text-base hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-base text-center text-gray-400">
            &copy; {new Date().getFullYear()} Digital Identity Heritage Vault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}