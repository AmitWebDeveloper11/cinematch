import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickFilterChips = ({ activeFilters, onFilterChange }) => {
  const quickFilters = [
    { key: 'rating', label: 'High Rated', icon: 'Star', value: '8+' },
    { key: 'year', label: 'Recent', icon: 'Calendar', value: '2020+' },
    { key: 'popular', label: 'Popular', icon: 'TrendingUp', value: 'popular' },
    { key: 'award', label: 'Award Winners', icon: 'Award', value: 'award' }
  ];

  return (
    <div className="px-4 py-3 border-b border-border">
      <div className="flex items-center space-x-2 overflow-x-auto">
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          Quick Filters:
        </span>
        <div className="flex space-x-2">
          {quickFilters?.map((filter) => (
            <button
              key={filter?.key}
              onClick={() => onFilterChange(filter?.key, filter?.value)}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-smooth ${
                activeFilters?.[filter?.key] === filter?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Icon name={filter?.icon} size={12} color="currentColor" />
              <span>{filter?.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFilterChips;