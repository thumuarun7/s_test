import React, { useState } from 'react';
import { ArrowLeft, Plus, Edit3, Eye, EyeOff, Trash2, Save, X } from 'lucide-react';
import { NewsItem, Category } from '../types/news';

interface AdminPanelProps {
  news: NewsItem[];
  categories: Category[];
  onAddNews: (news: Omit<NewsItem, 'id'>) => void;
  onUpdateNews: (id: string, updates: Partial<NewsItem>) => void;
  onDeleteNews: (id: string) => void;
  onBackToMain: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  news,
  categories,
  onAddNews,
  onUpdateNews,
  onDeleteNews,
  onBackToMain
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    imageUrl: '',
    videoUrl: '',
    category: 'politics',
    isBreaking: false,
    author: 'Admin',
    location: ''
  });

  const resetForm = () => {
    setFormData({
      heading: '',
      description: '',
      imageUrl: '',
      videoUrl: '',
      category: 'politics',
      isBreaking: false,
      author: 'Admin',
      location: ''
    });
    setEditingNews(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingNews) {
      onUpdateNews(editingNews.id, formData);
    } else {
      onAddNews({
        ...formData,
        publishedAt: new Date(),
        isActive: true
      });
    }
    
    resetForm();
    setShowForm(false);
  };

  const handleEdit = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setFormData({
      heading: newsItem.heading,
      description: newsItem.description,
      imageUrl: newsItem.imageUrl || '',
      videoUrl: newsItem.videoUrl || '',
      category: newsItem.category,
      isBreaking: newsItem.isBreaking,
      author: newsItem.author,
      location: newsItem.location || ''
    });
    setShowForm(true);
  };

  const handleToggleActive = (id: string, isActive: boolean) => {
    onUpdateNews(id, { isActive: !isActive });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBackToMain}
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to Main</span>
              </button>
              <h1 className="text-2xl font-bold text-red-600">Admin Panel</h1>
            </div>
            
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Plus size={16} />
              <span>Add News</span>
            </button>
          </div>
        </div>
      </header>

      {/* News Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingNews ? 'Edit News' : 'Add News'}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    resetForm();
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    News Heading *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.heading}
                    onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter news heading"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter news description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter image URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video URL
                  </label>
                  <input
                    type="url"
                    value={formData.videoUrl}
                    onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter video URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    {categories.filter(cat => cat.id !== 'all').map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter author name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter location (e.g., Mumbai, Delhi)"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isBreaking"
                    checked={formData.isBreaking}
                    onChange={(e) => setFormData({ ...formData, isBreaking: e.target.checked })}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label htmlFor="isBreaking" className="ml-2 text-sm font-medium text-gray-700">
                    Mark as Breaking News
                  </label>
                </div>

                <div className="flex items-center justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      resetForm();
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Save size={16} />
                    <span>{editingNews ? 'Update' : 'Save'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* News Management */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">News Management</h2>
            <p className="text-gray-600">Manage all news articles and their status</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    News
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Published
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.heading}
                            className="w-12 h-12 rounded-lg object-cover mr-4"
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900 line-clamp-2">
                            {item.heading}
                          </div>
                          {item.isBreaking && (
                            <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                              Breaking
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="capitalize text-sm text-gray-900">
                        {item.category}
                      </span>
                      {item.location && (
                        <div className="text-xs text-gray-500 mt-1">
                          📍 {item.location}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        item.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {item.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-blue-600 hover:text-blue-700 p-1 rounded"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleToggleActive(item.id, item.isActive)}
                          className={`p-1 rounded ${
                            item.isActive 
                              ? 'text-red-600 hover:text-red-700' 
                              : 'text-green-600 hover:text-green-700'
                          }`}
                        >
                          {item.isActive ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                        <button
                          onClick={() => onDeleteNews(item.id)}
                          className="text-red-600 hover:text-red-700 p-1 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;