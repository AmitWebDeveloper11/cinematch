import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CountrySelector = ({ selectedCountry, onCountrySelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const countries = [
    { id: 'usa', name: 'United States', flag: '🇺🇸' },
    { id: 'india', name: 'India', flag: '🇮🇳' },
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'france', name: 'France', flag: '🇫🇷' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪' },
    { id: 'japan', name: 'Japan', flag: '🇯🇵' },
    { id: 'south-korea', name: 'South Korea', flag: '🇰🇷' },
    { id: 'china', name: 'China', flag: '🇨🇳' },
    { id: 'italy', name: 'Italy', flag: '🇮🇹' },
    { id: 'spain', name: 'Spain', flag: '🇪🇸' },
    { id: 'russia', name: 'Russia', flag: '🇷🇺' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦' },
    { id: 'australia', name: 'Australia', flag: '🇦🇺' },
    { id: 'brazil', name: 'Brazil', flag: '🇧🇷' },
    { id: 'mexico', name: 'Mexico', flag: '🇲🇽' },
    { id: 'iran', name: 'Iran', flag: '🇮🇷' },
    { id: 'turkey', name: 'Turkey', flag: '🇹🇷' },
    { id: 'sweden', name: 'Sweden', flag: '🇸🇪' },
    { id: 'denmark', name: 'Denmark', flag: '🇩🇰' },
    { id: 'norway', name: 'Norway', flag: '🇳🇴' },
    { id: 'argentina', name: 'Argentina', flag: '🇦🇷' },
    { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱' },
    { id: 'poland', name: 'Poland', flag: '🇵🇱' },
    { id: 'thailand', name: 'Thailand', flag: '🇹🇭' },
    { id: 'egypt', name: 'Egypt', flag: '🇪🇬' }
  ];

  const handleCountrySelect = (country) => {
    onCountrySelect(country);
    setIsExpanded(false);
  };

  const selectedCountryData = countries?.find(c => c?.id === selectedCountry);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-3">
        Choose Country
      </label>
      {/* Selected Country Display */}
      <div 
        className="w-full p-4 bg-card border border-border rounded-lg cursor-pointer transition-smooth hover:bg-muted"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {selectedCountryData ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{selectedCountryData?.flag}</span>
              <span className="font-medium text-foreground">{selectedCountryData?.name}</span>
            </div>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              color="var(--color-muted-foreground)" 
            />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Select a country</span>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              color="var(--color-muted-foreground)" 
            />
          </div>
        )}
      </div>
      {/* Expanded Country Options */}
      {isExpanded && (
        <div className="mt-2 p-2 bg-card border border-border rounded-lg max-h-80 overflow-y-auto">
          <div className="space-y-1">
            {countries?.map((country) => (
              <div
                key={country?.id}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-smooth hover:bg-muted ${
                  selectedCountry === country?.id ? 'bg-primary text-primary-foreground' : 'bg-background'
                }`}
                onClick={() => handleCountrySelect(country?.id)}
              >
                <span className="text-xl">{country?.flag}</span>
                <span className="font-medium">{country?.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;