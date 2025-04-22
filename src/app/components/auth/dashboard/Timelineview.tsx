'use client';

// Mock timeline data - replace with actual data fetching
const timelineEvents = [
  {
    id: 1,
    title: 'Family Migration',
    date: '1925',
    description: 'Grandparents moved from Italy to the United States',
    type: 'migration'
  },
  {
    id: 2,
    title: 'Traditional Wedding Ceremony',
    date: '1948',
    description: 'Grandparents married in traditional ceremony',
    type: 'cultural'
  },
  {
    id: 3,
    title: 'Family Recipe Collection',
    date: '1962',
    description: 'Grandmother compiled family recipes from generations',
    type: 'tradition'
  },
  {
    id: 4,
    title: 'Annual Family Reunion Tradition Begins',
    date: '1975',
    description: 'First annual family reunion held, still continues today',
    type: 'tradition'
  },
  {
    id: 5,
    title: 'Cultural Heritage Documentation',
    date: '2023',
    description: 'Began formal documentation of family cultural practices',
    type: 'documentation'
  },
];

export default function TimelineView() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-semibold">Heritage Timeline</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 w-1 h-full transform -translate-x-1/2 bg-indigo-200 sm:left-1/2"></div>
        
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Event dot */}
              <div className="absolute left-0 w-4 h-4 transform -translate-x-1/2 bg-indigo-500 rounded-full sm:left-1/2"></div>
              
              {/* Event content */}
              <div className={`relative sm:w-1/2 ${
                index % 2 === 0 ? 'ml-6 sm:ml-0' : 'ml-6 sm:ml-auto sm:pl-16'
              }`}>
                <div className="p-4 bg-gray-50 rounded-lg shadow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-indigo-600">{event.date}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      event.type === 'migration' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'cultural' ? 'bg-purple-100 text-purple-800' :
                      event.type === 'tradition' ? 'bg-green-100 text-green-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-medium">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
          Add Timeline Event
        </button>
      </div>
    </div>
  );
}