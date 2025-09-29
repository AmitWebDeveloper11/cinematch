import React from 'react';
import Button from '../../../components/ui/Button';

const QuickFilters = ({ onQuickFilter }) => {
  const quickFilters = [
    { 
      id: 'trending', 
      label: 'Trending Now', 
      icon: 'TrendingUp',
      filters: { genre: 'action', country: 'usa', language: 'english' }
    },
    { 
      id: 'bollywood', 
      label: 'Bollywood Hits', 
      icon: 'Heart',
      filters: { genre: 'romance', country: 'india', language: 'hindi' }
    },
    { 
      id: 'korean', 
      label: 'K-Cinema', 
      icon: 'Star',
      filters: { genre: 'drama', country: 'south-korea', language: 'korean' }
    },
    { 
      id: 'european', 
      label: 'European Art', 
      icon: 'Palette',
      filters: { genre: 'drama', country: 'france', language: 'french' }
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
        Quick Filters
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {quickFilters?.map((filter) => (
          <Button
            key={filter?.id}
            variant="outline"
            size="sm"
            onClick={() => onQuickFilter(filter?.filters)}
            iconName={filter?.icon}
            iconPosition="left"
            className="h-auto py-3 px-4 text-left justify-start"
          >
            <span className="text-sm font-medium">{filter?.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickFilters;