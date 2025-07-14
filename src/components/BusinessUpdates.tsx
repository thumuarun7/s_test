import React from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { NewsItem } from '../types/news';

interface BusinessUpdatesProps {
  news: NewsItem[];
}

const marketData = [
  { name: 'SENSEX', value: '72,845.72', change: '+245.68', changePercent: '+0.34%', isPositive: true },
  { name: 'NIFTY', value: '22,112.65', change: '+78.45', changePercent: '+0.36%', isPositive: true },
  { name: 'BANK NIFTY', value: '48,567.30', change: '-123.45', changePercent: '-0.25%', isPositive: false },
  { name: 'USD/INR', value: '83.24', change: '+0.12', changePercent: '+0.14%', isPositive: true }
];

const BusinessUpdates: React.FC<BusinessUpdatesProps> = ({ news }) => {
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
      <div className="bg-green-600 text-white px-6 py-4">
        <div className="flex items-center gap-2">
          <DollarSign size={20} />
          <h2 className="font-bold text-xl">Business & Markets</h2>
        </div>
      </div>
      
      {/* Market Data */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {marketData.map((market) => (
            <div key={market.name} className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="text-xs font-medium text-gray-600 mb-1">{market.name}</div>
              <div className="text-lg font-bold text-gray-900 mb-1">{market.value}</div>
              <div className={`text-xs font-medium flex items-center gap-1 ${
                market.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp size={12} className={market.isPositive ? '' : 'rotate-180'} />
                <span>{market.change} ({market.changePercent})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Business News */}
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
                <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-green-600 transition-colors leading-tight">
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
        <button className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
          View All Business News →
        </button>
      </div>
    </div>
  );
};

export default BusinessUpdates;