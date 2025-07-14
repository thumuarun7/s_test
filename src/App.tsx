import React, { useState } from 'react';
import { Search, Calendar, Settings, Plus, Menu, Bell, User, Globe } from 'lucide-react';
import NewsCard from './components/NewsCard';
import BreakingNewsBanner from './components/BreakingNewsBanner';
import AdminPanel from './components/AdminPanel';
import TopStories from './components/TopStories';
import TrendingTopics from './components/TrendingTopics';
import PhotoGallery from './components/PhotoGallery';
import VideoSection from './components/VideoSection';
import OpinionSection from './components/OpinionSection';
import SportsHighlights from './components/SportsHighlights';
import BusinessUpdates from './components/BusinessUpdates';
import { NewsItem, Category } from './types/news';

const categories: Category[] = [
  { id: 'all', name: 'Home', color: 'bg-red-600' },
  { id: 'india', name: 'India', color: 'bg-blue-600' },
  { id: 'world', name: 'World', color: 'bg-green-600' },
  { id: 'business', name: 'Business', color: 'bg-purple-600' },
  { id: 'sports', name: 'Sports', color: 'bg-orange-600' },
  { id: 'entertainment', name: 'Entertainment', color: 'bg-pink-600' },
  { id: 'technology', name: 'Tech', color: 'bg-indigo-600' },
  { id: 'lifestyle', name: 'Lifestyle', color: 'bg-teal-600' },
  { id: 'education', name: 'Education', color: 'bg-yellow-600' },
];

const initialNews: NewsItem[] = [
  {
    id: '1',
    heading: 'Stock Market Hits Record High Amid Economic Recovery',
    description: 'The Indian stock market reached unprecedented levels today as investors showed strong confidence in the economic recovery. Major indices surged across all sectors with banking and IT leading the rally.',
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'business',
    isBreaking: true,
    isActive: true,
    publishedAt: new Date('2025-01-15T10:30:00Z'),
    author: 'Business Desk',
    location: 'Mumbai'
  },
  {
    id: '2',
    heading: 'Major Political Rally Draws Massive Crowd in Delhi',
    description: 'A massive political rally took place in the national capital today, with thousands of supporters gathering to hear policy announcements and campaign promises ahead of upcoming elections.',
    imageUrl: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'india',
    isBreaking: true,
    isActive: true,
    publishedAt: new Date('2025-01-15T09:15:00Z'),
    author: 'Political Correspondent',
    location: 'New Delhi'
  },
  {
    id: '3',
    heading: 'Cricket World Cup Final: India vs Australia This Weekend',
    description: 'Two cricketing powerhouses will clash in the World Cup final this weekend, promising an exciting match that fans have been waiting for. Team preparations are in full swing.',
    imageUrl: 'https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'sports',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T08:45:00Z'),
    author: 'Sports Desk',
    location: 'Mumbai'
  },
  {
    id: '4',
    heading: 'Severe Monsoon Warning Issued for Western States',
    description: 'The India Meteorological Department has issued a severe weather warning for western states, with heavy rainfall and strong winds expected over the next 48 hours.',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'india',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T07:30:00Z'),
    author: 'Weather Desk',
    location: 'Mumbai'
  },
  {
    id: '5',
    heading: 'Tech Giant Announces Revolutionary AI Breakthrough',
    description: 'Indian tech company unveils groundbreaking artificial intelligence technology that promises to revolutionize healthcare and education sectors across the country.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'technology',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T06:00:00Z'),
    author: 'Tech Reporter',
    location: 'Bangalore'
  },
  {
    id: '6',
    heading: 'Bollywood Star Announces New Film Project',
    description: 'Leading Bollywood actor announces ambitious new film project with acclaimed director, promising to bring untold stories to the silver screen.',
    imageUrl: 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'entertainment',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T05:30:00Z'),
    author: 'Entertainment Desk',
    location: 'Mumbai'
  },
  {
    id: '7',
    heading: 'New Education Policy Shows Promising Results',
    description: 'The implementation of the new education policy has shown significant improvements in student performance across various states, according to recent government data.',
    imageUrl: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'education',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T04:15:00Z'),
    author: 'Education Correspondent',
    location: 'New Delhi'
  },
  {
    id: '8',
    heading: 'International Trade Summit Begins in Mumbai',
    description: 'Global leaders and business executives gather in Mumbai for the annual international trade summit, discussing future economic partnerships and trade agreements.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'business',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T03:45:00Z'),
    author: 'Business Reporter',
    location: 'Mumbai'
  },
  {
    id: '9',
    heading: 'Olympic Preparations Intensify as Games Approach',
    description: 'Indian athletes are making final preparations for the upcoming Olympics, with training camps and qualification events taking place across the country.',
    imageUrl: 'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'sports',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T02:30:00Z'),
    author: 'Sports Correspondent',
    location: 'New Delhi'
  },
  {
    id: '10',
    heading: 'Climate Change Conference Addresses Environmental Concerns',
    description: 'Environmental experts and policymakers discuss urgent climate action plans and sustainable development goals at the national climate conference.',
    imageUrl: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'world',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-15T01:15:00Z'),
    author: 'Environment Desk',
    location: 'Bangalore'
  },
  {
    id: '11',
    heading: 'Fashion Week Showcases Latest Trends',
    description: 'Designers from across the country present their latest collections at the annual fashion week, highlighting sustainable fashion and traditional craftsmanship.',
    imageUrl: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'lifestyle',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T23:45:00Z'),
    author: 'Lifestyle Editor',
    location: 'Mumbai'
  },
  {
    id: '12',
    heading: 'Healthcare Innovation Summit Focuses on Digital Health',
    description: 'Medical professionals and tech innovators collaborate on digital healthcare solutions to improve patient care and medical accessibility across rural areas.',
    imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'technology',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T22:30:00Z'),
    author: 'Health Reporter',
    location: 'Chennai'
  },
  {
    id: '13',
    heading: 'Music Festival Celebrates Cultural Diversity',
    description: 'Artists from different regions come together for a grand music festival celebrating India\'s rich cultural heritage and musical traditions.',
    imageUrl: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'entertainment',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T21:15:00Z'),
    author: 'Culture Desk',
    location: 'Kolkata'
  },
  {
    id: '14',
    heading: 'Infrastructure Development Projects Gain Momentum',
    description: 'Major infrastructure projects including highways, railways, and smart city initiatives are progressing rapidly across multiple states.',
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'india',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T20:00:00Z'),
    author: 'Infrastructure Correspondent',
    location: 'New Delhi'
  },
  {
    id: '15',
    heading: 'Space Mission Achieves Historic Milestone',
    description: 'India\'s space program reaches another significant milestone with the successful launch of a communication satellite, strengthening the country\'s space capabilities.',
    imageUrl: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'technology',
    isBreaking: true,
    isActive: true,
    publishedAt: new Date('2025-01-14T19:30:00Z'),
    author: 'Science Reporter',
    location: 'Sriharikota'
  },
  {
    id: '16',
    heading: 'Agricultural Reforms Show Positive Impact on Farmers',
    description: 'Recent agricultural policy changes have resulted in improved crop yields and better income for farmers across various states.',
    imageUrl: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'india',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T18:45:00Z'),
    author: 'Rural Correspondent',
    location: 'Punjab'
  },
  {
    id: '17',
    heading: 'Tourism Industry Shows Strong Recovery Signs',
    description: 'The tourism sector is experiencing a robust recovery with increased domestic and international visitors to popular destinations.',
    imageUrl: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'business',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T17:30:00Z'),
    author: 'Tourism Desk',
    location: 'Goa'
  },
  {
    id: '18',
    heading: 'Renewable Energy Projects Accelerate Nationwide',
    description: 'Solar and wind energy projects are being fast-tracked across the country as part of the commitment to achieve carbon neutrality goals.',
    imageUrl: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'world',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T16:15:00Z'),
    author: 'Energy Reporter',
    location: 'Rajasthan'
  },
  {
    id: '19',
    heading: 'Digital Payment Systems Reach New Heights',
    description: 'Digital payment adoption continues to grow exponentially, with new records set for transaction volumes and user registrations.',
    imageUrl: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'technology',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T15:00:00Z'),
    author: 'Fintech Reporter',
    location: 'Bangalore'
  },
  {
    id: '20',
    heading: 'Cultural Heritage Sites Get Modern Conservation Treatment',
    description: 'Ancient monuments and heritage sites across India are being restored using modern conservation techniques while preserving their historical authenticity.',
    imageUrl: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: null,
    category: 'lifestyle',
    isBreaking: false,
    isActive: true,
    publishedAt: new Date('2025-01-14T14:30:00Z'),
    author: 'Heritage Correspondent',
    location: 'Agra'
  }
];

function App() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const breakingNews = news.filter(item => item.isBreaking && item.isActive);
  const topStories = news.filter(item => item.isActive).slice(0, 6);
  const sportsNews = news.filter(item => item.category === 'sports' && item.isActive).slice(0, 4);
  const businessNews = news.filter(item => item.category === 'business' && item.isActive).slice(0, 4);

  const filteredNews = news.filter(item => {
    if (!item.isActive) return false;
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesDate = true;
    if (startDate) {
      matchesDate = matchesDate && new Date(item.publishedAt) >= new Date(startDate);
    }
    if (endDate) {
      matchesDate = matchesDate && new Date(item.publishedAt) <= new Date(endDate);
    }
    
    return matchesCategory && matchesSearch && matchesDate;
  });

  const addNews = (newNews: Omit<NewsItem, 'id'>) => {
    const newsWithId = {
      ...newNews,
      id: Date.now().toString(),
    };
    setNews(prev => [newsWithId, ...prev]);
  };

  const updateNews = (id: string, updates: Partial<NewsItem>) => {
    setNews(prev => prev.map(item => 
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const deleteNews = (id: string) => {
    setNews(prev => prev.filter(item => item.id !== id));
  };

  if (isAdmin) {
    return (
      <AdminPanel
        news={news}
        categories={categories}
        onAddNews={addNews}
        onUpdateNews={updateNews}
        onDeleteNews={deleteNews}
        onBackToMain={() => setIsAdmin(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">
                {new Date().toLocaleDateString('en-IN', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">E-Paper</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-red-600 transition-colors">
                <Bell size={16} />
              </button>
              <button className="text-gray-600 hover:text-red-600 transition-colors">
                <User size={16} />
              </button>
              <button
                onClick={() => setIsAdmin(true)}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <Settings size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-2 border-red-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-red-600 tracking-tight">Sparklex</h1>
                <p className="text-sm text-gray-600 -mt-1">Network</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Globe size={16} />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Category Tabs */}
            <div className="flex items-center space-x-1">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-3 font-medium transition-colors relative ${
                    activeCategory === category.id
                      ? 'bg-red-700 text-white'
                      : 'text-red-100 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  {category.name}
                  {activeCategory === category.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Date Filters */}
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="text-red-200" size={16} />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="px-2 py-1 text-gray-900 rounded border-0 text-xs"
              />
              <span className="text-red-200">to</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="px-2 py-1 text-gray-900 rounded border-0 text-xs"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Breaking News Banner */}
      {breakingNews.length > 0 && (
        <BreakingNewsBanner news={breakingNews} />
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <TopStories stories={topStories} />
            <TrendingTopics />
            <PhotoGallery />
            <VideoSection />
          </div>

          {/* Main News Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured News */}
            {filteredNews.length > 0 && (
              <div>
                <NewsCard news={filteredNews[0]} featured={true} />
              </div>
            )}

            {/* Opinion Section */}
            <OpinionSection />

            {/* Sports Highlights */}
            <SportsHighlights news={sportsNews} />

            {/* Business Updates */}
            <BusinessUpdates news={businessNews} />

            {/* News Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
                Latest News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNews.slice(1).map(item => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            </div>
            
            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No news found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold text-red-600">Sparklex Network</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted source for breaking news and comprehensive coverage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">India News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">World News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                  <span className="text-white text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs">y</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
            <p>© 2025 Sparklex Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;