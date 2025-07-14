import React from 'react';
import { TrendingUp, Hash } from 'lucide-react';

const trendingTopics = [
  { id: 1, topic: '#ElectionResults2025', count: '45.2K tweets' },
  { id: 2, topic: '#ClimateAction', count: '32.8K tweets' },
  { id: 3, topic: '#TechInnovation', count: '28.5K tweets' },
  { id: 4, topic: '#SportsUpdate', count: '24.1K tweets' },
  { id: 5, topic: '#EconomicGrowth', count: '19.7K tweets' },
  { id: 6, topic: '#HealthcareReform', count: '16.3K tweets' },
  { id: 7, topic: '#EducationPolicy', count: '14.9K tweets' },
  { id: 8, topic: '#DigitalIndia', count: '12.4K tweets' }
];

const TrendingTopics: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} />
          <h2 className="font-bold text-lg">Trending Topics</h2>
        </div>
      </div>
      
      {/* Topics List */}
      <div className="divide-y divide-gray-200">
        {trendingTopics.map((topic, index) => (
          <div key={topic.id} className="p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              {/* Trending Number */}
              <div className="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1">
                  <Hash size={14} className="text-red-600" />
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                    {topic.topic.replace('#', '')}
                  </h3>
                </div>
                <p className="text-xs text-gray-500">{topic.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="p-3 bg-gray-50 border-t border-gray-200">
        <button className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
          View All Trends →
        </button>
      </div>
    </div>
  );
};

export default TrendingTopics;