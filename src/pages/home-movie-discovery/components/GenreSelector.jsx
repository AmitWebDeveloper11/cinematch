import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GenreSelector = ({ selectedGenre, onGenreSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const genres = [
    { id: 'action', name: 'Action', icon: 'Zap', color: 'bg-red-500' },
    { id: 'comedy', name: 'Comedy', icon: 'Smile', color: 'bg-yellow-500' },
    { id: 'drama', name: 'Drama', icon: 'Heart', color: 'bg-blue-500' },
    { id: 'horror', name: 'Horror', icon: 'Ghost', color: 'bg-purple-500' },
    { id: 'romance', name: 'Romance', icon: 'Heart', color: 'bg-pink-500' },
    { id: 'thriller', name: 'Thriller', icon: 'Eye', color: 'bg-gray-500' },
    { id: 'sci-fi', name: 'Sci-Fi', icon: 'Rocket', color: 'bg-cyan-500' },
    { id: 'fantasy', name: 'Fantasy', icon: 'Sparkles', color: 'bg-indigo-500' },
    { id: 'documentary', name: 'Documentary', icon: 'Camera', color: 'bg-green-500' },
    { id: 'animation', name: 'Animation', icon: 'Palette', color: 'bg-orange-500' },
    { id: 'crime', name: 'Crime', icon: 'Shield', color: 'bg-red-600' },
    { id: 'adventure', name: 'Adventure', icon: 'Map', color: 'bg-emerald-500' },
    { id: 'biography', name: 'Biography', icon: 'User', color: 'bg-amber-500' },
    { id: 'history', name: 'History', icon: 'Clock', color: 'bg-stone-500' },
    { id: 'war', name: 'War', icon: 'Sword', color: 'bg-slate-600' },
    { id: 'western', name: 'Western', icon: 'Mountain', color: 'bg-yellow-600' },
    { id: 'musical', name: 'Musical', icon: 'Music', color: 'bg-violet-500' },
    { id: 'mystery', name: 'Mystery', icon: 'Search', color: 'bg-gray-600' },
    { id: 'family', name: 'Family', icon: 'Users', color: 'bg-green-400' },
    { id: 'sport', name: 'Sport', icon: 'Trophy', color: 'bg-blue-600' }
  ];

  const handleGenreSelect = (genre) => {
    onGenreSelect(genre);
    setIsExpanded(false);
  };

  const selectedGenreData = genres?.find(g => g?.id === selectedGenre);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-3">
        Choose Genre
      </label>
      {/* Selected Genre Display */}
      <div 
        className="w-full p-4 bg-card border border-border rounded-lg cursor-pointer transition-smooth hover:bg-muted"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {selectedGenreData ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${selectedGenreData?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={selectedGenreData?.icon} size={20} color="white" />
              </div>
              <span className="font-medium text-foreground">{selectedGenreData?.name}</span>
            </div>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              color="var(--color-muted-foreground)" 
            />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Select a genre</span>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              color="var(--color-muted-foreground)" 
            />
          </div>
        )}
      </div>
      {/* Expanded Genre Options */}
      {isExpanded && (
        <div className="mt-2 p-2 bg-card border border-border rounded-lg max-h-80 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {genres?.map((genre) => (
              <div
                key={genre?.id}
                className={`p-3 rounded-lg cursor-pointer transition-smooth hover:bg-muted ${
                  selectedGenre === genre?.id ? 'bg-primary text-primary-foreground' : 'bg-background'
                }`}
                onClick={() => handleGenreSelect(genre?.id)}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-8 h-8 ${genre?.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={genre?.icon} size={16} color="white" />
                  </div>
                  <span className="text-xs font-medium text-center">{genre?.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreSelector;