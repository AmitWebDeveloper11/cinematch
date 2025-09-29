import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalDetails = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const technicalSpecs = [
    { label: 'Runtime', value: movie?.runtime, icon: 'Clock' },
    { label: 'Language', value: movie?.language, icon: 'Languages' },
    { label: 'Country', value: movie?.country, icon: 'Globe' },
    { label: 'Release Date', value: movie?.releaseDate, icon: 'Calendar' },
    { label: 'Production Company', value: movie?.productionCompany, icon: 'Building' },
    { label: 'Distributor', value: movie?.distributor, icon: 'Truck' },
    { label: 'Aspect Ratio', value: movie?.aspectRatio, icon: 'Monitor' },
    { label: 'Sound Mix', value: movie?.soundMix, icon: 'Volume2' },
    { label: 'Color', value: movie?.color, icon: 'Palette' },
    { label: 'Filming Location', value: movie?.filmingLocation, icon: 'MapPin' }
  ];

  const visibleSpecs = isExpanded ? technicalSpecs : technicalSpecs?.slice(0, 6);

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-heading font-bold text-foreground">Technical Details</h2>
        <Icon name="Settings" size={20} color="var(--color-muted-foreground)" />
      </div>
      <div className="space-y-4">
        {/* Technical Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visibleSpecs?.map((spec, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <Icon name={spec?.icon} size={16} color="var(--color-muted-foreground)" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-muted-foreground text-xs font-body uppercase tracking-wide">
                  {spec?.label}
                </p>
                <p className="text-foreground font-body font-medium truncate">
                  {spec?.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {technicalSpecs?.length > 6 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center space-x-2 py-3 text-primary hover:text-primary/80 transition-smooth font-body font-medium"
          >
            <span>{isExpanded ? 'Show Less Details' : 'Show More Details'}</span>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={16} 
              color="currentColor" 
            />
          </button>
        )}

        {/* Additional Production Information */}
        <div className="pt-4 border-t border-border">
          <h3 className="text-lg font-heading font-bold text-foreground mb-3">Production Info</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Icon name="DollarSign" size={16} color="var(--color-muted-foreground)" className="mt-1" />
              <div>
                <p className="text-muted-foreground text-sm font-body">Budget</p>
                <p className="text-foreground font-body font-medium">{movie?.budget}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="TrendingUp" size={16} color="var(--color-muted-foreground)" className="mt-1" />
              <div>
                <p className="text-muted-foreground text-sm font-body">Box Office</p>
                <p className="text-foreground font-body font-medium">{movie?.boxOffice}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="Award" size={16} color="var(--color-muted-foreground)" className="mt-1" />
              <div>
                <p className="text-muted-foreground text-sm font-body">Awards</p>
                <p className="text-foreground font-body font-medium">{movie?.awards}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;