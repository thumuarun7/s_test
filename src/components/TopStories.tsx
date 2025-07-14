import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { NewsItem } from '../types/news';

interface TopStoriesProps {
  stories: NewsItem[];
}

const TopStories: React.FC<TopStoriesProps> = ({ stories }) => {
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
      <div className="bg-red-600 text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} />
          <h2 className="font-bold text-lg">Top Stories</h2>
        </div>
      </div>
      
      {/* Stories List */}
      <div className="divide-y divide-gray-200">
        {stories.map((story, index) => (
          <div key={story.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex items-start gap-3">
              {/* Story Number */}
              <div className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-3 group-hover:text-red-600 transition-colors">
                  {story.heading}
                </h3>
                
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>{formatDate(story.publishedAt)}</span>
                  {story.isBreaking && (
                    <>
                      <span>•</span>
                      <span className="text-red-600 font-medium">Breaking</span>
                    </>
                  )}
                </div>
              </div>
              
              {/* Thumbnail */}
              {story.imageUrl && (
                <div className="flex-shrink-0 w-16 h-12 rounded overflow-hidden">
                  <img
                    src={story.imageUrl}
                    alt={story.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
          View All Stories →
        </button>
      </div>
    </div>
  );
};

export default TopStories;