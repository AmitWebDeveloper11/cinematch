import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ filters, onRefreshRecommendations }) => {
  const navigate = useNavigate();

  const handleEditFilters = () => {
    navigate('/home-movie-discovery');
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <Icon name="Film" size={48} color="var(--color-muted-foreground)" />
      </div>
      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
        No Movies Found
      </h3>
      <p className="text-muted-foreground text-center mb-6 max-w-md">
        We couldn't find any movies matching your current preferences. Try adjusting your filters or refresh for new recommendations.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          iconName="Edit3"
          iconPosition="left"
          onClick={handleEditFilters}
        >
          Edit Filters
        </Button>
        <Button
          variant="default"
          iconName="RefreshCw"
          iconPosition="left"
          onClick={onRefreshRecommendations}
        >
          Refresh Recommendations
        </Button>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-2">Current filters:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {filters?.genre && (
            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
              Genre: {filters?.genre}
            </span>
          )}
          {filters?.country && (
            <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs">
              Country: {filters?.country}
            </span>
          )}
          {filters?.language && (
            <span className="px-2 py-1 bg-success/10 text-success rounded text-xs">
              Language: {filters?.language}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyState;