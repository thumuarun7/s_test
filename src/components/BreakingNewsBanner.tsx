import React, { useState, useEffect } from 'react';
import { AlertTriangle, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { NewsItem } from '../types/news';

interface BreakingNewsBannerProps {
  news: NewsItem[];
}

const BreakingNewsBanner: React.FC<BreakingNewsBannerProps> = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (news.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [news.length]);

  const nextNews = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevNews = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  if (news.length === 0) return null;

  return (
    <div className="bg-red-600 text-white shadow-lg relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center gap-4">
          {/* Breaking News Label */}
          <div className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg flex-shrink-0">
            <AlertTriangle size={18} className="animate-pulse" />
            <span>Breaking News</span>
            <Volume2 size={16} />
          </div>
          
          {/* News Content */}
          <div className="flex-1 flex items-center justify-between min-w-0">
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {news.map((item, index) => (
                  <div key={item.id} className="flex-shrink-0 w-full min-w-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold truncate">
                        {item.heading}
                      </h3>
                      {item.location && (
                        <span className="text-red-200 text-sm bg-red-500 px-2 py-1 rounded-full flex-shrink-0">
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls */}
            {news.length > 1 && (
              <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                <button
                  onClick={prevNews}
                  className="p-2 hover:bg-red-500 rounded-full transition-colors"
                  aria-label="Previous news"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-1">
                  {news.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-red-300'
                      }`}
                      aria-label={`Go to news ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextNews}
                  className="p-2 hover:bg-red-500 rounded-full transition-colors"
                  aria-label="Next news"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsBanner;