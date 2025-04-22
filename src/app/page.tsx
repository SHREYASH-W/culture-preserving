// app/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Identity Heritage Vault - Preserve Your Cultural Legacy',
  description: 'Securely store, preserve, and share your family history, traditions, and cultural heritage for generations to come.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Preserve Your Cultural Heritage
              <span className="block text-indigo-300">For Generations To Come</span>
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-2xl">
              Digital Identity Heritage Vault securely stores your family stories, traditions, and cultural heritage
              in a multi-generational digital repository designed to last.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link 
                href="/register" 
                className="px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Your Heritage Vault
              </Link>
              <Link 
                href="/about" 
                className="px-8 py-3 text-base font-medium text-indigo-100 border border-indigo-300 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">Protect What Matters Most</h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-center text-gray-600">
            Our platform is designed to preserve your heritage in a secure digital repository.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium text-gray-900">Secure Storage</h3>
              <p className="text-gray-600">
                Bank-level encryption protects your family histories, photos, and documents for generations to come.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium text-gray-900">Scheduled Releases</h3>
              <p className="text-gray-600">
                Set future dates for stories and media to be shared with specific family members.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium text-gray-900">Family Tree Integration</h3>
              <p className="text-gray-600">
                Connect stories, photos, and traditions to specific individuals in your interactive family tree.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium text-gray-900">Multimedia Support</h3>
              <p className="text-gray-600">
                Store videos, audio recordings, photos, and documents all in one secure place.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium text-gray-900">Access Control</h3>
              <p className="text-gray-600">
                Invite family members with customized permissions to view and contribute to your heritage vault.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-indigo-600 rounded-full">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-medium text-gray-900">Disaster Recovery</h3>
              <p className="text-gray-600">
                Multiple backup systems ensure your heritage is preserved even in the event of catastrophic data loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">Preserving Memories That Matter</h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-center text-gray-600">
            See how others are using Digital Identity Heritage Vault to preserve their cultural legacy.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <div className="flex items-center justify-center w-full h-full text-lg font-medium text-gray-500">JM</div>
                </div>
                <div>
                  <h3 className="font-medium">James Martínez</h3>
                  <p className="text-sm text-gray-600">Family Historian</p>
                </div>
              </div>
              <p className="text-gray-600">
                "After years of collecting family stories, I finally have a secure place to store everything. The scheduled releases mean my grandchildren will receive our family history exactly when I want them to."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <div className="flex items-center justify-center w-full h-full text-lg font-medium text-gray-500">ST</div>
                </div>
                <div>
                  <h3 className="font-medium">Sarah Tanaka</h3>
                  <p className="text-sm text-gray-600">Cultural Preservation Advocate</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our traditional recipes and ceremonies were at risk of being lost. Now we've documented everything in our family vault, and I know it will be preserved for generations."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <div className="flex items-center justify-center w-full h-full text-lg font-medium text-gray-500">RK</div>
                </div>
                <div>
                  <h3 className="font-medium">Robert Kagawa</h3>
                  <p className="text-sm text-gray-600">Genealogist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The family tree integration makes it easy to connect stories to individuals. I've uploaded photos and documents spanning five generations, all securely stored in one place."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-indigo-700">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Start Preserving Your Heritage Today</h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-indigo-200">
            Don't let your family's stories and traditions fade away. Create your digital heritage vault now.
          </p>
          <div className="mt-8">
            <Link 
              href="/register" 
              className="px-8 py-3 text-base font-medium text-indigo-700 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Create Your Vault
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}