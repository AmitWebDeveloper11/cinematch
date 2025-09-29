import React from 'react';
import Select from '../../../components/ui/Select';

const BasicCriteriaFilter = ({ filters, onFilterChange }) => {
  const genreOptions = [
    { value: '', label: 'All Genres' },
    { value: 'action', label: 'Action' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' },
    { value: 'horror', label: 'Horror' },
    { value: 'romance', label: 'Romance' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'sci-fi', label: 'Sci-Fi' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'animation', label: 'Animation' },
    { value: 'crime', label: 'Crime' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'biography', label: 'Biography' },
    { value: 'history', label: 'History' },
    { value: 'war', label: 'War' },
    { value: 'western', label: 'Western' },
    { value: 'musical', label: 'Musical' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'family', label: 'Family' },
    { value: 'sport', label: 'Sport' }
  ];

  const countryOptions = [
    { value: '', label: 'All Countries' },
    { value: 'usa', label: 'United States' },
    { value: 'india', label: 'India' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'france', label: 'France' },
    { value: 'germany', label: 'Germany' },
    { value: 'japan', label: 'Japan' },
    { value: 'south-korea', label: 'South Korea' },
    { value: 'china', label: 'China' },
    { value: 'italy', label: 'Italy' },
    { value: 'spain', label: 'Spain' },
    { value: 'russia', label: 'Russia' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'mexico', label: 'Mexico' },
    { value: 'iran', label: 'Iran' },
    { value: 'turkey', label: 'Turkey' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'denmark', label: 'Denmark' },
    { value: 'norway', label: 'Norway' },
    { value: 'argentina', label: 'Argentina' }
  ];

  const languageOptions = [
    { value: '', label: 'All Languages' },
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' },
    { value: 'japanese', label: 'Japanese' },
    { value: 'korean', label: 'Korean' },
    { value: 'mandarin', label: 'Mandarin' },
    { value: 'italian', label: 'Italian' },
    { value: 'portuguese', label: 'Portuguese' },
    { value: 'russian', label: 'Russian' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'turkish', label: 'Turkish' },
    { value: 'swedish', label: 'Swedish' },
    { value: 'danish', label: 'Danish' },
    { value: 'norwegian', label: 'Norwegian' },
    { value: 'persian', label: 'Persian' },
    { value: 'dutch', label: 'Dutch' },
    { value: 'polish', label: 'Polish' }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          label="Genre"
          options={genreOptions}
          value={filters?.genre}
          onChange={(value) => onFilterChange('genre', value)}
          searchable
        />
        
        <Select
          label="Country"
          options={countryOptions}
          value={filters?.country}
          onChange={(value) => onFilterChange('country', value)}
          searchable
        />
        
        <Select
          label="Language"
          options={languageOptions}
          value={filters?.language}
          onChange={(value) => onFilterChange('language', value)}
          searchable
        />
      </div>
    </div>
  );
};

export default BasicCriteriaFilter;