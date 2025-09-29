import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MovieSynopsis = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = movie?.synopsis?.length > 300;
  const displayText = shouldTruncate && !isExpanded 
    ? movie?.synopsis?.substring(0, 300) + '...' 
    : movie?.synopsis;

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-heading font-bold text-foreground">Synopsis</h2>
        <Icon name="FileText" size={20} color="var(--color-muted-foreground)" />
      </div>
      <div className="space-y-4">
        <p className="text-muted-foreground font-body leading-relaxed">
          {displayText}
        </p>
        
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-smooth font-body font-medium"
          >
            <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={16} 
              color="currentColor" 
            />
          </button>
        )}

        {/* Additional Movie Details */}
        <div className="pt-4 border-t border-border space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-body">Original Title</span>
              <span className="text-foreground font-body font-medium">{movie?.originalTitle}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-body">Budget</span>
              <span className="text-foreground font-body font-medium">{movie?.budget}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-body">Box Office</span>
              <span className="text-foreground font-body font-medium">{movie?.boxOffice}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-body">Awards</span>
              <span className="text-foreground font-body font-medium">{movie?.awards}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSynopsis;