import React from 'react';
import { Trophy, Clock } from 'lucide-react';
import { NewsItem } from '../types/news';

interface SportsHighlightsProps {
  news: NewsItem[];
}

const SportsHighlights: React.FC<SportsHighlightsProps> = ({ news }) => {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      return new Date(date).toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric'
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-orange-600 text-white px-6 py-4">
        <div className="flex items-center gap-2">
          <Trophy size={20} />
          <h2 className="font-bold text-xl">Sports Highlights</h2>
        </div>
      </div>
      
      {/* Sports News Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
              {/* Image */}
              {item.imageUrl && (
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              )}
              
              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors leading-tight">
                  {item.heading}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{item.location}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{formatDate(item.publishedAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View All Link */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
          View All Sports News →
        </button>
      </div>
    </div>
  );
};

export default SportsHighlights;