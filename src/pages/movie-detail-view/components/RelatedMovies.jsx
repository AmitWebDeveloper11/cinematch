import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedMovies = ({ movies }) => {
  const MovieCard = ({ movie }) => (
    <Link
      to={`/movie-detail-view?id=${movie?.id}`}
      className="flex-shrink-0 w-48 group transition-smooth hover:scale-105"
    >
      <div className="space-y-3">
        <div className="relative w-48 h-72 rounded-lg overflow-hidden bg-muted shadow-card">
          <Image
            src={movie?.poster}
            alt={`${movie?.title} poster`}
            className="w-full h-full object-cover group-hover:scale-110 transition-layout"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          
          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Icon name="Star" size={12} color="var(--color-accent)" />
            <span className="text-xs font-medium text-foreground">{movie?.rating}</span>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-modal">
              <Icon name="Play" size={20} color="white" />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="font-body font-medium text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-smooth">
            {movie?.title}
          </h3>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span className="text-xs font-body">{movie?.releaseYear}</span>
            <span className="text-xs">•</span>
            <span className="text-xs font-body">{movie?.genre}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-heading font-bold text-foreground">You Might Also Like</h2>
          <Icon name="Sparkles" size={20} color="var(--color-accent)" />
        </div>
        <Link to="/movie-recommendations-results">
          <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
            View All
          </Button>
        </Link>
      </div>
      {/* Movies Horizontal Scroll */}
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      {/* Alternative Grid Layout for Desktop */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-6 mt-6">
        {movies?.slice(0, 4)?.map((movie, index) => (
          <Link
            key={index}
            to={`/movie-detail-view?id=${movie?.id}`}
            className="group transition-smooth hover:scale-105"
          >
            <div className="space-y-3">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-muted shadow-card">
                <Image
                  src={movie?.poster}
                  alt={`${movie?.title} poster`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-layout"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Icon name="Star" size={12} color="var(--color-accent)" />
                  <span className="text-xs font-medium text-foreground">{movie?.rating}</span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-modal">
                    <Icon name="Play" size={20} color="white" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-body font-medium text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-smooth">
                  {movie?.title}
                </h3>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-xs font-body">{movie?.releaseYear}</span>
                  <span className="text-xs">•</span>
                  <span className="text-xs font-body">{movie?.genre}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;