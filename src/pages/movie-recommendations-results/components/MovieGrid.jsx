import React from 'react';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './MovieCardSkeleton';

const MovieGrid = ({ movies, loading, hasMore, onLoadMore }) => {
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
        
        {loading && (
          <>
            {[...Array(10)].map((_, index) => (
              <MovieCardSkeleton key={`skeleton-${index}`} />
            ))}
          </>
        )}
      </div>
      {hasMore && !loading && (
        <div className="flex justify-center mt-8">
          <button
            onClick={onLoadMore}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth"
          >
            Load More Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;