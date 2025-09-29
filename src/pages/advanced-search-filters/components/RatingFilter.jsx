import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const RatingFilter = ({ filters, onFilterChange }) => {
  const ratingOptions = [
    { value: '', label: 'Any Rating' },
    { value: '9.0', label: '9.0+ Exceptional' },
    { value: '8.0', label: '8.0+ Excellent' },
    { value: '7.0', label: '7.0+ Very Good' },
    { value: '6.0', label: '6.0+ Good' },
    { value: '5.0', label: '5.0+ Average' },
    { value: '4.0', label: '4.0+ Below Average' }
  ];

  const voteCountOptions = [
    { value: '', label: 'Any Vote Count' },
    { value: '1000', label: '1,000+ votes' },
    { value: '5000', label: '5,000+ votes' },
    { value: '10000', label: '10,000+ votes' },
    { value: '50000', label: '50,000+ votes' },
    { value: '100000', label: '100,000+ votes' }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Minimum Rating"
          description="Filter by IMDb rating threshold"
          options={ratingOptions}
          value={filters?.minRating}
          onChange={(value) => onFilterChange('minRating', value)}
        />
        
        <Select
          label="Minimum Vote Count"
          description="Ensure rating reliability"
          options={voteCountOptions}
          value={filters?.minVotes}
          onChange={(value) => onFilterChange('minVotes', value)}
        />
      </div>
      <div className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
        <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">Rating Guidelines</p>
          <p>Higher vote counts generally indicate more reliable ratings. Movies with fewer than 1,000 votes may have less accurate scores.</p>
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;