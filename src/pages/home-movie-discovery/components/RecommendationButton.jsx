import React from 'react';
import Button from '../../../components/ui/Button';

const RecommendationButton = ({ 
  selectedGenre, 
  selectedCountry, 
  selectedLanguage, 
  onGetRecommendations, 
  isLoading 
}) => {
  const isDisabled = !selectedGenre || !selectedCountry || !selectedLanguage;

  const handleClick = () => {
    if (!isDisabled && !isLoading) {
      onGetRecommendations();
    }
  };

  return (
    <div className="w-full">
      <Button
        variant="default"
        size="lg"
        fullWidth
        loading={isLoading}
        disabled={isDisabled}
        onClick={handleClick}
        iconName="Sparkles"
        iconPosition="left"
        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4"
      >
        {isLoading ? 'Finding Movies...' : 'Get Recommendations'}
      </Button>
      
      {isDisabled && (
        <p className="text-sm text-muted-foreground text-center mt-2">
          Please select genre, country, and language to get recommendations
        </p>
      )}
    </div>
  );
};

export default RecommendationButton;