import React from 'react';
import { Calendar, User, MapPin, Clock } from 'lucide-react';
import { NewsItem } from '../types/news';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
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
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      india: 'bg-orange-100 text-orange-800 border-orange-200',
      world: 'bg-blue-100 text-blue-800 border-blue-200',
      business: 'bg-green-100 text-green-800 border-green-200',
      sports: 'bg-purple-100 text-purple-800 border-purple-200',
      entertainment: 'bg-pink-100 text-pink-800 border-pink-200',
      technology: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      lifestyle: 'bg-teal-100 text-teal-800 border-teal-200',
      education: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  if (featured) {
    return (
      <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
        {/* Breaking News Badge */}
        {news.isBreaking && (
          <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold uppercase tracking-wide">
            Breaking News
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image */}
          {news.imageUrl && (
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={news.imageUrl}
                alt={news.heading}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          )}
          
          {/* Content */}
          <div className="p-6 flex flex-col justify-between">
            {/* Category Badge */}
            <div className="mb-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(news.category)}`}>
                {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
              </span>
            </div>
            
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-red-600 transition-colors">
              {news.heading}
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {news.description}
            </p>
            
            {/* Meta Information */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center gap-1 font-medium">
                  <User size={14} />
                  {news.author}
                </span>
                {news.location && (
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {news.location}
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {formatDate(news.publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      {/* Breaking News Badge */}
      {news.isBreaking && (
        <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
          Breaking
        </div>
      )}
      
      {/* Image */}
      {news.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={news.imageUrl}
            alt={news.heading}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      
      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(news.category)}`}>
            {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
          </span>
        </div>
        
        {/* Heading */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors leading-tight">
          {news.heading}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 mb-3 line-clamp-3 text-sm leading-relaxed">
          {news.description}
        </p>
        
        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1">
              <User size={12} />
              {news.author}
            </span>
            {news.location && (
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {news.location}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {formatDate(news.publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;