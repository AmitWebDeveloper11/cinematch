import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MovieHero = ({ movie, onAddToWatchlist, isInWatchlist }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: movie?.title,
        text: `Check out ${movie?.title} - ${movie?.synopsis?.substring(0, 100)}...`,
        url: window.location?.href,
      });
    } else {
      navigator.clipboard?.writeText(window.location?.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="relative bg-card rounded-lg overflow-hidden shadow-card">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      {/* Hero Content */}
      <div className="relative z-20 p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Movie Poster */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative w-64 h-96 lg:w-80 lg:h-[480px] rounded-lg overflow-hidden shadow-modal">
              <Image
                src={movie?.poster}
                alt={`${movie?.title} poster`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Icon name="Star" size={16} color="var(--color-accent)" />
                <span className="text-sm font-medium text-foreground">{movie?.rating}</span>
              </div>
            </div>
          </div>

          {/* Movie Information */}
          <div className="flex-1 space-y-6">
            {/* Title and Basic Info */}
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
                {movie?.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Icon name="Calendar" size={16} color="currentColor" />
                  <span className="font-body">{movie?.releaseYear}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={16} color="currentColor" />
                  <span className="font-body">{movie?.runtime}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Globe" size={16} color="currentColor" />
                  <span className="font-body">{movie?.country}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Languages" size={16} color="currentColor" />
                  <span className="font-body">{movie?.language}</span>
                </span>
              </div>
            </div>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2">
              {movie?.genres?.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-body font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Director and Key Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} color="var(--color-muted-foreground)" />
                <span className="text-muted-foreground font-body">Directed by</span>
                <span className="text-foreground font-body font-medium">{movie?.director}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} color="var(--color-muted-foreground)" />
                <span className="text-muted-foreground font-body">IMDb Rating</span>
                <span className="text-foreground font-body font-medium">{movie?.rating}/10</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant={isInWatchlist ? "secondary" : "default"}
                size="lg"
                iconName={isInWatchlist ? "Check" : "Plus"}
                iconPosition="left"
                onClick={onAddToWatchlist}
                className="flex-1 sm:flex-none"
              >
                {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Share"
                iconPosition="left"
                onClick={handleShare}
                className="flex-1 sm:flex-none"
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieHero;