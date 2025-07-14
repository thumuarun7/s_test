import React from 'react';
import { MessageSquare, User } from 'lucide-react';

const opinions = [
  {
    id: 1,
    title: 'The Future of Digital Democracy in India',
    author: 'Dr. Rajesh Kumar',
    excerpt: 'As technology reshapes governance, we must ensure digital inclusion remains at the forefront of democratic participation.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Climate Action: Beyond Policy to Practice',
    author: 'Prof. Meera Sharma',
    excerpt: 'Environmental policies need grassroots implementation to create meaningful change in our fight against climate change.',
    imageUrl: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '4 min read'
  }
];

const OpinionSection: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 text-white px-6 py-4">
        <div className="flex items-center gap-2">
          <MessageSquare size={20} />
          <h2 className="font-bold text-xl">Opinion & Analysis</h2>
        </div>
      </div>
      
      {/* Opinion Articles */}
      <div className="divide-y divide-gray-200">
        {opinions.map((opinion) => (
          <div key={opinion.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="flex gap-4">
              {/* Image */}
              <div className="flex-shrink-0 w-24 h-18 rounded-lg overflow-hidden">
                <img
                  src={opinion.imageUrl}
                  alt={opinion.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-red-600 transition-colors leading-tight">
                  {opinion.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {opinion.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span className="font-medium">{opinion.author}</span>
                  </div>
                  <span>{opinion.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Link */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
          Read More Opinions →
        </button>
      </div>
    </div>
  );
};

export default OpinionSection;