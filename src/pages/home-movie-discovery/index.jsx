import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import WelcomeSection from './components/WelcomeSection';
import QuickFilters from './components/QuickFilters';
import FilterSection from './components/FilterSection';
import RecommendationButton from './components/RecommendationButton';

const HomeMovieDiscovery = () => {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickFilter = (filters) => {
    setSelectedGenre(filters?.genre);
    setSelectedCountry(filters?.country);
    setSelectedLanguage(filters?.language);
  };

  const handleGetRecommendations = async () => {
    if (!selectedGenre || !selectedCountry || !selectedLanguage) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      
      // Navigate to recommendations results with selected filters
      const searchParams = new URLSearchParams({
        genre: selectedGenre,
        country: selectedCountry,
        language: selectedLanguage
      });
      
      navigate(`/movie-recommendations-results?${searchParams?.toString()}`);
    }, 2000);
  };

  const resetFilters = () => {
    setSelectedGenre('');
    setSelectedCountry('');
    setSelectedLanguage('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <WelcomeSection />
          
          {/* Quick Filters */}
          <QuickFilters onQuickFilter={handleQuickFilter} />
          
          {/* Main Filter Section */}
          <FilterSection 
            selectedGenre={selectedGenre}
            selectedCountry={selectedCountry}
            selectedLanguage={selectedLanguage}
            onGenreSelect={setSelectedGenre}
            onCountrySelect={setSelectedCountry}
            onLanguageSelect={setSelectedLanguage}
          />
          
          {/* Action Buttons */}
          <div className="w-full max-w-md mx-auto space-y-4">
            <RecommendationButton
              selectedGenre={selectedGenre}
              selectedCountry={selectedCountry}
              selectedLanguage={selectedLanguage}
              onGetRecommendations={handleGetRecommendations}
              isLoading={isLoading}
            />
            
            {(selectedGenre || selectedCountry || selectedLanguage) && (
              <button
                onClick={resetFilters}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-smooth underline"
                disabled={isLoading}
              >
                Clear all filters
              </button>
            )}
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need more specific options? Try our advanced search
            </p>
            <button
              onClick={() => navigate('/advanced-search-filters')}
              className="text-sm text-accent hover:text-accent/80 transition-smooth underline font-medium"
            >
              Advanced Search & Filters
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeMovieDiscovery;