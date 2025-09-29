import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LanguageSelector = ({ selectedLanguage, onLanguageSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const languages = [
    { id: 'english', name: 'English', native: 'English' },
    { id: 'hindi', name: 'Hindi', native: 'हिन्दी' },
    { id: 'spanish', name: 'Spanish', native: 'Español' },
    { id: 'french', name: 'French', native: 'Français' },
    { id: 'german', name: 'German', native: 'Deutsch' },
    { id: 'japanese', name: 'Japanese', native: '日本語' },
    { id: 'korean', name: 'Korean', native: '한국어' },
    { id: 'mandarin', name: 'Mandarin', native: '中文' },
    { id: 'italian', name: 'Italian', native: 'Italiano' },
    { id: 'portuguese', name: 'Portuguese', native: 'Português' },
    { id: 'russian', name: 'Russian', native: 'Русский' },
    { id: 'arabic', name: 'Arabic', native: 'العربية' },
    { id: 'turkish', name: 'Turkish', native: 'Türkçe' },
    { id: 'swedish', name: 'Swedish', native: 'Svenska' },
    { id: 'danish', name: 'Danish', native: 'Dansk' },
    { id: 'norwegian', name: 'Norwegian', native: 'Norsk' },
    { id: 'persian', name: 'Persian', native: 'فارسی' },
    { id: 'dutch', name: 'Dutch', native: 'Nederlands' },
    { id: 'polish', name: 'Polish', native: 'Polski' },
    { id: 'thai', name: 'Thai', native: 'ไทย' },
    { id: 'tamil', name: 'Tamil', native: 'தமிழ்' },
    { id: 'telugu', name: 'Telugu', native: 'తెలుగు' },
    { id: 'bengali', name: 'Bengali', native: 'বাংলা' },
    { id: 'marathi', name: 'Marathi', native: 'मराठी' },
    { id: 'gujarati', name: 'Gujarati', native: 'ગુજરાતી' }
  ];

  const handleLanguageSelect = (language) => {
    onLanguageSelect(language);
    setIsExpanded(false);
  };

  const selectedLanguageData = languages?.find(l => l?.id === selectedLanguage);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-foreground mb-3">
        Choose Language
      </label>
      {/* Selected Language Display */}
      <div 
        className="w-full p-4 bg-card border border-border rounded-lg cursor-pointer transition-smooth hover:bg-muted"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {selectedLanguageData ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Icon name="Languages" size={20} color="var(--color-accent-foreground)" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-foreground">{selectedLanguageData?.name}</span>
                <span className="text-sm text-muted-foreground">{selectedLanguageData?.native}</span>
              </div>
            </div>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              color="var(--color-muted-foreground)" 
            />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Select a language</span>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              color="var(--color-muted-foreground)" 
            />
          </div>
        )}
      </div>
      {/* Expanded Language Options */}
      {isExpanded && (
        <div className="mt-2 p-2 bg-card border border-border rounded-lg max-h-80 overflow-y-auto">
          <div className="space-y-1">
            {languages?.map((language) => (
              <div
                key={language?.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-smooth hover:bg-muted ${
                  selectedLanguage === language?.id ? 'bg-primary text-primary-foreground' : 'bg-background'
                }`}
                onClick={() => handleLanguageSelect(language?.id)}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{language?.name}</span>
                  <span className="text-sm opacity-70">{language?.native}</span>
                </div>
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                  <Icon name="Languages" size={14} color="var(--color-accent-foreground)" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;