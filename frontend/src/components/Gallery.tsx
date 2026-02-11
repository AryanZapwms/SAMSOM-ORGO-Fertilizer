import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title?: string;
  description?: string;
  category?: string;
}

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Sample gallery data - you can replace this with your own
  const galleryItems: MediaItem[] = [
    // Images
    {
      id: 1,
      type: 'image',
      url: '/assets/gallery/image/image1.jpeg',
      title: 'Modern Indoor Garden',
      description: 'Our fertilizer in action with lush indoor plants',
      category: 'indoor'
    },
    {
      id: 2,
      type: 'image',
      url: '/assets/gallery/image/image2.jpeg',
      title: 'Agricultural Field',
      description: 'Large-scale farm using our compost fertilizer',
      category: 'agriculture'
    },
    {
      id: 3,
      type: 'image',
      url: '/assets/gallery/image/image3.jpeg',
      title: 'Organic Compost Process',
      description: 'Our natural composting method',
      category: 'process'
    },
    {
      id: 4,
      type: 'image',
      url: '/assets/gallery/image/image4.jpeg',
      title: 'Greenhouse Plants',
      description: 'Healthy growth in controlled environments',
      category: 'greenhouse'
    },
    {
      id: 5,
      type: 'image',
      url: '/assets/gallery/image/image5.jpeg',
      title: 'Fertilizer Application',
      description: 'Proper way to apply organic fertilizer',
      category: 'process'
    },
    {
      id: 6,
      type: 'image',
      url: '/assets/gallery/image/image6.jpeg',
      title: 'Plant Health',
      description: 'Visible results on leaf health',
      category: 'indoor'
    },
    {
      id: 7,
      type: 'image',
      url: '/assets/gallery/image/image7.jpeg',
      title: 'Root Development',
      description: 'Stronger roots with our formula',
      category: 'agriculture'
    },
    {
      id: 8,
      type: 'image',
      url: '/assets/gallery/image/image8.jpeg',
      title: 'Sustainable Growth',
      description: 'Eco-friendly results',
      category: 'sustainability'
    },
    {
      id: 9,
      type: 'image',
      url: '/assets/gallery/image/image9.jpeg',
      title: 'Crop Quality',
      description: 'Premium crop yield',
      category: 'agriculture'
    },
    {
      id: 10,
      type: 'image',
      url: '/assets/gallery/image/image10.jpeg',
      title: 'Home Gardening',
      description: 'Perfect for home gardens',
      category: 'indoor'
    },
    {
      id: 11,
      type: 'image',
      url: '/assets/gallery/image/image11.jpeg',
      title: 'Farming Success',
      description: 'Commercial farm results',
      category: 'agriculture'
    },
    {
      id: 12,
      type: 'image',
      url: '/assets/gallery/image/image12.jpeg',
      title: 'Soil Enrichment',
      description: 'Better soil texture',
      category: 'results'
    },
    {
      id: 13,
      type: 'image',
      url: '/assets/gallery/image/image13.jpeg',
      title: 'Vegetable Garden',
      description: 'Bigger and healthier vegetables',
      category: 'results'
    },
    {
      id: 14,
      type: 'image',
      url: '/assets/gallery/image/image14.jpeg',
      title: 'Flower Bloom',
      description: 'Vibrant flower growth',
      category: 'indoor'
    },
    {
      id: 15,
      type: 'image',
      url: '/assets/gallery/image/image15.jpeg',
      title: 'Organic Certification',
      description: 'Our process meets organic standards',
      category: 'process'
    },
    {
      id: 16,
      type: 'image',
      url: '/assets/gallery/image/image16.jpeg',
      title: 'Nursery Care',
      description: 'Ideal for saplings',
      category: 'greenhouse'
    },
  
    // Videos
    {
      id: 18,
      type: 'video',
      url: '/assets/gallery/videos/video1.mp4',
      thumbnail: '/assets/gallery/image/image10.jpeg',
      title: 'Application Tutorial',
      description: 'How to properly apply our fertilizer',
      category: 'tutorial'
    },
    {
      id: 19,
      type: 'video',
      url: '/assets/gallery/videos/video2.mp4',
      thumbnail: '/assets/gallery/image/image9.jpeg',
      title: 'Farm Success Story',
      description: 'Real results from our customers',
      category: 'testimonial'
    },
    {
      id: 20,
      type: 'video',
      url: '/assets/gallery/videos/video3.mp4',
      thumbnail: '/assets/gallery/image/image4.jpeg',
      title: 'Rich Soil',
      description: 'The quality soil our fertilizer produces',
      category: 'results'
    },
    {
      id: 21,
      type: 'video',
      url: '/assets/gallery/videos/video4.mp4',
      thumbnail: '/assets/gallery/image/image11.jpeg',
      title: 'Sustainable Farming',
      description: 'Eco-friendly agricultural practices',
      category: 'sustainability'
    }
  ];

  const categories = ['all', 'indoor', 'agriculture', 'process', 'greenhouse', 'tutorial', 'testimonial', 'results', 'sustainability'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openMediaModal = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  const closeMediaModal = () => {
    setSelectedMedia(null);
  };

  // Get translated category name
  const getCategoryName = (category: string): string => {
    const translations: Record<string, string> = {
      'all': t('gallery.category.all', 'All'),
      'indoor': t('gallery.category.indoor', 'Indoor'),
      'agriculture': t('gallery.category.agriculture', 'Agriculture'),
      'process': t('gallery.category.process', 'Process'),
      'greenhouse': t('gallery.category.greenhouse', 'Greenhouse'),
      'tutorial': t('gallery.category.tutorial', 'Tutorial'),
      'testimonial': t('gallery.category.testimonial', 'Testimonial'),
      'results': t('gallery.category.results', 'Results'),
      'sustainability': t('gallery.category.sustainability', 'Sustainability')
    };
    return translations[category] || category;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-950 dark:text-white mb-4">
            {t('gallery.title', 'Our Gallery')}
          </h2>
          <p className="text-lg text-emerald-800/70 dark:text-emerald-100/60 max-w-2xl mx-auto">
            {t('gallery.subtitle', 'Explore visual stories of growth, sustainability, and success with our organic fertilizer')}
          </p>
        </div> */}

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-emerald-50 dark:bg-gray-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-gray-700'
              }`}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openMediaModal(item)}
            >
              {/* Thumbnail/Preview */}
              <div className="aspect-square relative overflow-hidden">
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.thumbnail || item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  {getCategoryName(item.category || '')}
                </span>
              </div>

              {/* Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              {t('gallery.empty.title', 'No media found')}
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400">
              {t('gallery.empty.message', 'Try selecting a different category')}
            </p>
          </div>
        )}

        {/* Media Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeMediaModal}>
            <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={closeMediaModal}
                className="absolute -top-12 right-0 text-white hover:text-primary text-2xl z-10"
              >
                ✕
              </button>
              
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia.url}
                    controls
                    autoPlay
                    className="w-full max-h-[70vh]"
                  />
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-emerald-950 dark:text-white mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-emerald-800/70 dark:text-emerald-100/60">
                    {selectedMedia.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium">
                      {getCategoryName(selectedMedia.category || '')}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedMedia.type === 'image' ? t('gallery.type.image', 'Image') : t('gallery.type.video', 'Video')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Section (Optional) */}
        {/* <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl">
            <h3 className="text-2xl font-bold text-emerald-950 dark:text-white mb-4">
              {t('gallery.upload.title', 'Share Your Success!')}
            </h3>
            <p className="text-emerald-800/70 dark:text-emerald-100/60 mb-6">
              {t('gallery.upload.description', 'Have photos or videos of your plants thriving with our fertilizer? Share them with our community!')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <input
                type="file"
                id="media-upload"
                accept="image/*,video/*"
                multiple
                className="hidden"
              />
              <label
                htmlFor="media-upload"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl cursor-pointer transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                {t('gallery.upload.button', 'Upload Media')}
              </label>
              <button className="px-8 py-3 bg-emerald-50 dark:bg-gray-700 hover:bg-emerald-100 dark:hover:bg-gray-600 text-emerald-700 dark:text-emerald-300 font-bold rounded-xl transition-colors">
                {t('gallery.upload.guidelines', 'View Guidelines')}
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              {t('gallery.upload.note', 'Supports JPG, PNG, MP4 up to 50MB')}
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;