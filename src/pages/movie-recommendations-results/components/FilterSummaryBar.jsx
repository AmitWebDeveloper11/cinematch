import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterSummaryBar = ({ filters, onEditFilters, onRefreshRecommendations }) => {
  const { genre, country, language } = filters;

  return (
    <div className="bg-card border-b border-border px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={16} color="var(--color-muted-foreground)" />
            <span className="text-sm font-medium text-muted-foreground">Active Filters:</span>
          </div>
          
          <div className="flex items-center space-x-2 flex-wrap">
            {genre && (
              <div className="flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                <span>Genre: {genre}</span>
              </div>
            )}
            {country && (
              <div className="flex items-center space-x-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-xs">
                <span>Country: {country}</span>
              </div>
            )}
            {language && (
              <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-md text-xs">
                <span>Language: {language}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="Edit3"
            iconPosition="left"
            onClick={onEditFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="RefreshCw"
            iconPosition="left"
            onClick={onRefreshRecommendations}
          >
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSummaryBar;