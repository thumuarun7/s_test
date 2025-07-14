import React from 'react';
import { Play, Clock } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Breaking: Market Analysis Today',
    thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '4:32',
    views: '12K'
  },
  {
    id: 2,
    title: 'Political Debate Highlights',
    thumbnail: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '8:15',
    views: '8.5K'
  },
  {
    id: 3,
    title: 'Sports Weekly Roundup',
    thumbnail: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=400',
    duration: '6:48',
    views: '15K'
  }
];

const VideoSection: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <Play size={18} />
          <h2 className="font-bold text-lg">Videos</h2>
        </div>
      </div>
      
      {/* Videos List */}
      <div className="divide-y divide-gray-200">
        {videos.map((video) => (
          <div key={video.id} className="p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex gap-3">
              {/* Thumbnail */}
              <div className="relative flex-shrink-0 w-20 h-14 rounded overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Play size={16} className="text-white" />
                </div>
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm leading-tight mb-1 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock size={12} />
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="p-3 bg-gray-50 border-t border-gray-200">
        <button className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
          View All Videos →
        </button>
      </div>
    </div>
  );
};

export default VideoSection;