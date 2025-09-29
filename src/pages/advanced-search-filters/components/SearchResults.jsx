import React, { useState } from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { Link } from 'react-router-dom';

const SearchResults = ({ results, loading, sortBy, onSortChange }) => {
  const [viewMode, setViewMode] = useState('grid');

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'rating', label: 'Rating (High to Low)' },
    { value: 'year', label: 'Release Year (Newest)' },
    { value: 'alphabetical', label: 'Alphabetical (A-Z)' },
    { value: 'popularity', label: 'Popularity' }
  ];

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Searching movies...</p>
          </div>
        </div>
      </div>
    );
  }

  if (results?.length === 0) {
    return (
      <div className="text-center py-12">
        <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="font-heading font-semibold text-foreground mb-2">No movies found</h3>
        <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
        <Button variant="outline" iconName="RotateCcw" iconPosition="left">
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">{results?.length}</span> movies found
          </p>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              iconName="Grid3X3"
            />
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              iconName="List"
            />
          </div>
        </div>
        
        <Select
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
          className="w-48"
        />
      </div>
      {/* Results Grid/List */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" :"space-y-4"
      }>
        {results?.map((movie) => (
          <Link
            key={movie?.id}
            to={`/movie-detail-view?id=${movie?.id}`}
            className={`group transition-smooth hover:scale-105 ${
              viewMode === 'list' ? 'flex space-x-4 p-4 bg-card border border-border rounded-lg' : ''
            }`}
          >
            {viewMode === 'grid' ? (
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="aspect-[2/3] overflow-hidden">
                  <Image
                    src={movie?.poster}
                    alt={movie?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-1 line-clamp-2">
                    {movie?.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{movie?.year}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={12} className="text-accent fill-current" />
                      <span>{movie?.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="w-20 h-28 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={movie?.poster}
                    alt={movie?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {movie?.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <span>{movie?.year}</span>
                    <span>{movie?.genre}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-accent fill-current" />
                      <span>{movie?.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {movie?.description}
                  </p>
                </div>
              </>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;