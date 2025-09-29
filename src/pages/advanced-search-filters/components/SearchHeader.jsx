import React, { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SearchHeader = ({ searchQuery, onSearchChange, onClearSearch }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Mock autocomplete suggestions
  const mockSuggestions = [
    { type: 'movie', text: 'The Dark Knight', category: 'Movie' },
    { type: 'movie', text: 'Inception', category: 'Movie' },
    { type: 'director', text: 'Christopher Nolan', category: 'Director' },
    { type: 'actor', text: 'Leonardo DiCaprio', category: 'Actor' },
    { type: 'movie', text: 'Parasite', category: 'Movie' },
    { type: 'director', text: 'Bong Joon-ho', category: 'Director' },
    { type: 'movie', text: 'Avengers: Endgame', category: 'Movie' },
    { type: 'actor', text: 'Robert Downey Jr.', category: 'Actor' }
  ];

  useEffect(() => {
    if (searchQuery?.length > 1) {
      const filtered = mockSuggestions?.filter(item =>
        item?.text?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      )?.slice(0, 6);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion?.text);
    setShowSuggestions(false);
  };

  const handleInputFocus = () => {
    if (searchQuery?.length > 1) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow click events
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <div className="bg-card border-b border-border">
      <div className="px-4 lg:px-6 py-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search movies, directors, actors..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e?.target?.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="pl-12 pr-12"
            />
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
              >
                <Icon name="X" size={16} />
              </Button>
            )}
          </div>

          {/* Autocomplete Suggestions */}
          {showSuggestions && suggestions?.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-modal z-50 max-h-64 overflow-y-auto">
              {suggestions?.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-muted transition-smooth flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={suggestion?.type === 'movie' ? 'Film' : suggestion?.type === 'director' ? 'Camera' : 'User'} 
                      size={16} 
                      className="text-muted-foreground"
                    />
                    <span className="text-foreground font-body">{suggestion?.text}</span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {suggestion?.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;