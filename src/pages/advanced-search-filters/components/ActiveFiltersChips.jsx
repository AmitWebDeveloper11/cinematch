import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ActiveFiltersChips = ({ filters, onRemoveFilter, onClearAll }) => {
  const getFilterChips = () => {
    const chips = [];
    
    if (filters?.genre) {
      chips?.push({
        key: 'genre',
        label: `Genre: ${filters?.genre?.charAt(0)?.toUpperCase() + filters?.genre?.slice(1)}`,
        value: filters?.genre
      });
    }
    
    if (filters?.country) {
      chips?.push({
        key: 'country',
        label: `Country: ${filters?.country?.charAt(0)?.toUpperCase() + filters?.country?.slice(1)}`,
        value: filters?.country
      });
    }
    
    if (filters?.language) {
      chips?.push({
        key: 'language',
        label: `Language: ${filters?.language?.charAt(0)?.toUpperCase() + filters?.language?.slice(1)}`,
        value: filters?.language
      });
    }
    
    if (filters?.yearFrom || filters?.yearTo) {
      const yearRange = `${filters?.yearFrom || '1900'} - ${filters?.yearTo || new Date()?.getFullYear()}`;
      chips?.push({
        key: 'year',
        label: `Year: ${yearRange}`,
        value: 'year'
      });
    }
    
    if (filters?.minRating) {
      chips?.push({
        key: 'minRating',
        label: `Rating: ${filters?.minRating}+`,
        value: filters?.minRating
      });
    }
    
    if (filters?.minVotes) {
      chips?.push({
        key: 'minVotes',
        label: `Votes: ${parseInt(filters?.minVotes)?.toLocaleString()}+`,
        value: filters?.minVotes
      });
    }
    
    if (filters?.minRuntime || filters?.maxRuntime) {
      const runtimeRange = `${filters?.minRuntime || 0} - ${filters?.maxRuntime || 600} min`;
      chips?.push({
        key: 'runtime',
        label: `Runtime: ${runtimeRange}`,
        value: 'runtime'
      });
    }
    
    if (filters?.certification) {
      chips?.push({
        key: 'certification',
        label: `Rating: ${filters?.certification?.toUpperCase()}`,
        value: filters?.certification
      });
    }
    
    return chips;
  };

  const chips = getFilterChips();

  if (chips?.length === 0) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading font-semibold text-foreground flex items-center space-x-2">
          <Icon name="Filter" size={18} className="text-primary" />
          <span>Active Filters</span>
          <span className="text-sm text-muted-foreground">({chips?.length})</span>
        </h3>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAll}
          iconName="X"
          iconPosition="left"
          className="text-destructive hover:text-destructive"
        >
          Clear All
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips?.map((chip) => (
          <div
            key={chip?.key}
            className="flex items-center space-x-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1.5 text-sm"
          >
            <span className="font-body">{chip?.label}</span>
            <button
              onClick={() => onRemoveFilter(chip?.key)}
              className="hover:bg-primary/20 rounded-full p-0.5 transition-smooth"
            >
              <Icon name="X" size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFiltersChips;