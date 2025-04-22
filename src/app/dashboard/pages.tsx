'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// These components would need to be created in your project
// Replace with actual imports once components are created
const FamilyTree = () => <div>Family Tree Component</div>;
const TimelineView = () => <div>Timeline View Component</div>;

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  // Mock data - would come from API in real implementation
  const mockUserData = {
    name: session?.user?.name || 'Family Member',
    totalEntries: 48,
    pendingReleases: 7,
    recentActivity: [
      { id: 1, type: 'upload', title: 'Grandmother\'s Recipe Collection', date: '2025-04-15' },
      { id: 2, type: 'schedule', title: 'Family Migration Story', date: '2025-04-10' },
      { id: 3, type: 'view', title: 'Traditional Wedding Ceremony', date: '2025-04-05' }
    ]
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Heritage Vault, {mockUserData.name}</h1>
        <p className="mt-2 text-gray-600">Preserve and share your cultural identity</p>
      </header>

      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex-1 min-w-[300px] p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Heritage Entries</h2>
          <p className="text-3xl font-bold text-indigo-600">{mockUserData.totalEntries}</p>
          <p className="text-sm text-gray-500">Total stories, traditions, and artifacts</p>
        </div>
        
        <div className="flex-1 min-w-[300px] p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Scheduled Releases</h2>
          <p className="text-3xl font-bold text-amber-600">{mockUserData.pendingReleases}</p>
          <p className="text-sm text-gray-500">Entries set for future sharing</p>
        </div>
        
        <div className="flex-1 min-w-[300px] p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Family Members</h2>
          <p className="text-3xl font-bold text-emerald-600">12</p>
          <p className="text-sm text-gray-500">Connected to your vault</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 mr-4 text-sm font-medium ${
                activeTab === 'overview'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('family-tree')}
              className={`px-4 py-2 mr-4 text-sm font-medium ${
                activeTab === 'family-tree'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Family Tree
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 mr-4 text-sm font-medium ${
                activeTab === 'timeline'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Timeline
            </button>
          </nav>
        </div>

        <div className="mt-6">
          {activeTab === 'overview' && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
                <ul className="space-y-4">
                  {mockUserData.recentActivity.map(activity => (
                    <li key={activity.id} className="flex items-start p-3 border-b border-gray-100 last:border-0">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full mr-3 
                        ${activity.type === 'upload' ? 'bg-green-100 text-green-600' : 
                          activity.type === 'schedule' ? 'bg-blue-100 text-blue-600' : 
                          'bg-purple-100 text-purple-600'}`}>
                        {activity.type === 'upload' ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        ) : activity.type === 'schedule' ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{activity.title}</h3>
                        <p className="text-sm text-gray-500">
                          {activity.type === 'upload' ? 'Uploaded on ' : 
                            activity.type === 'schedule' ? 'Scheduled on ' : 
                            'Viewed on '} 
                          {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all activity →
                </button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => router.push('/heritage/new')}
                    className="flex flex-col items-center justify-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-8 h-8 mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="font-medium">New Heritage Entry</span>
                  </button>
                  
                  <button 
                    onClick={() => router.push('/dashboard/family-tree')}
                    className="flex flex-col items-center justify-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-8 h-8 mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span className="font-medium">Add Family Member</span>
                  </button>
                  
                  <button 
                    className="flex flex-col items-center justify-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-8 h-8 mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Schedule Release</span>
                  </button>
                  
                  <button 
                    className="flex flex-col items-center justify-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-8 h-8 mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Share Vault Access</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'family-tree' && <FamilyTree />}
          {activeTab === 'timeline' && <TimelineView />}
        </div>
      </div>
    </div>
  );
}