import React from 'react';
import { Camera, Eye } from 'lucide-react';

const photoGallery = [
  {
    id: 1,
    title: 'Republic Day Celebrations',
    imageUrl: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '2.3K'
  },
  {
    id: 2,
    title: 'Tech Conference 2025',
    imageUrl: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '1.8K'
  },
  {
    id: 3,
    title: 'Cricket Championship',
    imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '3.1K'
  },
  {
    id: 4,
    title: 'Cultural Festival',
    imageUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
    views: '1.5K'
  }
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <Camera size={18} />
          <h2 className="font-bold text-lg">Photo Gallery</h2>
        </div>
      </div>
      
      {/* Photo Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {photoGallery.map((photo) => (
            <div key={photo.id} className="relative group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-xs font-medium text-gray-900 line-clamp-2 group-hover:text-red-600 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{photo.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View All Link */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <button className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
          View All Photos →
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;