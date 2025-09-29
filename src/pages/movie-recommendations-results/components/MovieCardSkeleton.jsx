import React from 'react';

const MovieCardSkeleton = () => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-card animate-pulse">
      <div className="aspect-[2/3] bg-muted"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-muted rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-muted rounded"></div>
          <div className="h-3 bg-muted rounded w-5/6"></div>
          <div className="h-3 bg-muted rounded w-4/6"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-muted rounded w-1/4"></div>
          <div className="h-3 bg-muted rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;