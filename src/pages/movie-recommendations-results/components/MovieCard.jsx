import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie-detail-view?id=${movie?.id}`);
  };

  const getRatingColor = (rating) => {
    if (rating >= 8) return 'text-success bg-success/10';
    if (rating >= 6) return 'text-warning bg-warning/10';
    return 'text-error bg-error/10';
  };

  return (
    <div 
      className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-modal transition-smooth cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={movie?.poster}
          alt={`${movie?.title} poster`}
          className="w-full h-full object-cover group-hover:scale-105 transition-layout"
        />
        <div className="absolute top-2 right-2">
          <div className={`px-2 py-1 rounded-md text-xs font-medium ${getRatingColor(movie?.rating)}`}>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={12} color="currentColor" />
              <span>{movie?.rating}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="text-white text-xs opacity-80">
            {movie?.year} • {movie?.duration}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
          {movie?.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {movie?.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Icon name="Globe" size={14} color="var(--color-muted-foreground)" />
              <span className="text-xs text-muted-foreground">{movie?.country}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
            <span>{movie?.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;