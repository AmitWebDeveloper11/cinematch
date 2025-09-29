import React from 'react';
import GenreSelector from './GenreSelector';
import CountrySelector from './CountrySelector';
import LanguageSelector from './LanguageSelector';

const FilterSection = ({ 
  selectedGenre, 
  selectedCountry, 
  selectedLanguage,
  onGenreSelect,
  onCountrySelect,
  onLanguageSelect
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <GenreSelector 
            selectedGenre={selectedGenre}
            onGenreSelect={onGenreSelect}
          />
        </div>
        
        <div className="space-y-2">
          <CountrySelector 
            selectedCountry={selectedCountry}
            onCountrySelect={onCountrySelect}
          />
        </div>
        
        <div className="space-y-2">
          <LanguageSelector 
            selectedLanguage={selectedLanguage}
            onLanguageSelect={onLanguageSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;