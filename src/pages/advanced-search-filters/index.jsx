import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import SearchHeader from './components/SearchHeader';
import FilterSection from './components/FilterSection';
import BasicCriteriaFilter from './components/BasicCriteriaFilter';
import ReleasePeriodFilter from './components/ReleasePeriodFilter';
import RatingFilter from './components/RatingFilter';
import ContentAttributesFilter from './components/ContentAttributesFilter';
import ActiveFiltersChips from './components/ActiveFiltersChips';
import SearchResults from './components/SearchResults';
import Button from '../../components/ui/Button';

const AdvancedSearchFilters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    country: '',
    language: '',
    yearFrom: '',
    yearTo: '',
    minRating: '',
    minVotes: '',
    minRuntime: '',
    maxRuntime: '',
    certification: ''
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Mock search results data
  const mockResults = [
    {
      id: 1,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.0,
      poster: "https://images.unsplash.com/photo-1489599735188-3c9b7c6e8e8c?w=400&h=600&fit=crop",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    {
      id: 3,
      title: "Parasite",
      year: 2019,
      genre: "Thriller",
      rating: 8.6,
      poster: "https://images.unsplash.com/photo-1489599735188-3c9b7c6e8e8c?w=400&h=600&fit=crop",
      description: "A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals."
    },
    {
      id: 4,
      title: "Spirited Away",
      year: 2001,
      genre: "Animation",
      rating: 9.3,
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits."
    },
    {
      id: 5,
      title: "The Godfather",
      year: 1972,
      genre: "Crime",
      rating: 9.2,
      poster: "https://images.unsplash.com/photo-1489599735188-3c9b7c6e8e8c?w=400&h=600&fit=crop",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      id: 6,
      title: "Pulp Fiction",
      year: 1994,
      genre: "Crime",
      rating: 8.9,
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
    },
    {
      id: 7,
      title: "Your Name",
      year: 2016,
      genre: "Animation",
      rating: 8.4,
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?"
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      year: 2019,
      genre: "Action",
      rating: 8.4,
      poster: "https://images.unsplash.com/photo-1489599735188-3c9b7c6e8e8c?w=400&h=600&fit=crop",
      description: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more."
    }
  ];

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery || Object.values(filters)?.some(value => value !== '')) {
        performSearch();
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, filters, sortBy]);

  const performSearch = () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let results = [...mockResults];
      
      // Filter by search query
      if (searchQuery) {
        results = results?.filter(movie =>
          movie?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
          movie?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        );
      }
      
      // Apply filters
      if (filters?.genre) {
        results = results?.filter(movie =>
          movie?.genre?.toLowerCase() === filters?.genre?.toLowerCase()
        );
      }
      
      if (filters?.yearFrom) {
        results = results?.filter(movie => movie?.year >= parseInt(filters?.yearFrom));
      }
      
      if (filters?.yearTo) {
        results = results?.filter(movie => movie?.year <= parseInt(filters?.yearTo));
      }
      
      if (filters?.minRating) {
        results = results?.filter(movie => movie?.rating >= parseFloat(filters?.minRating));
      }
      
      // Sort results
      switch (sortBy) {
        case 'rating':
          results?.sort((a, b) => b?.rating - a?.rating);
          break;
        case 'year':
          results?.sort((a, b) => b?.year - a?.year);
          break;
        case 'alphabetical':
          results?.sort((a, b) => a?.title?.localeCompare(b?.title));
          break;
        default:
          // Keep relevance order
          break;
      }
      
      setSearchResults(results);
      setLoading(false);
    }, 800);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleRemoveFilter = (filterKey) => {
    if (filterKey === 'year') {
      setFilters(prev => ({
        ...prev,
        yearFrom: '',
        yearTo: ''
      }));
    } else if (filterKey === 'runtime') {
      setFilters(prev => ({
        ...prev,
        minRuntime: '',
        maxRuntime: ''
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [filterKey]: ''
      }));
    }
  };

  const handleClearAllFilters = () => {
    setFilters({
      genre: '',
      country: '',
      language: '',
      yearFrom: '',
      yearTo: '',
      minRating: '',
      minVotes: '',
      minRuntime: '',
      maxRuntime: '',
      certification: ''
    });
    setSearchQuery('');
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const hasActiveFilters = Object.values(filters)?.some(value => value !== '') || searchQuery;

  return (
    <>
      <Helmet>
        <title>Advanced Search & Filters - CineMatch</title>
        <meta name="description" content="Discover movies with advanced search and filtering options. Find films by genre, country, language, rating, and more on CineMatch." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <SearchHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClearSearch={handleClearSearch}
          />
          
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Filters Sidebar */}
            <div className="lg:w-80 lg:flex-shrink-0 border-r border-border bg-card">
              <div className="p-4 lg:p-6 space-y-4 lg:sticky lg:top-20 lg:max-h-screen lg:overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading font-bold text-xl text-foreground">Filters</h2>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearAllFilters}
                      iconName="RotateCcw"
                      iconPosition="left"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Reset
                    </Button>
                  )}
                </div>

                <FilterSection title="Basic Criteria" icon="Filter" defaultExpanded={true}>
                  <BasicCriteriaFilter
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </FilterSection>

                <FilterSection title="Release Period" icon="Calendar">
                  <ReleasePeriodFilter
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </FilterSection>

                <FilterSection title="Rating & Popularity" icon="Star">
                  <RatingFilter
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </FilterSection>

                <FilterSection title="Content Attributes" icon="Settings">
                  <ContentAttributesFilter
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </FilterSection>
              </div>
            </div>

            {/* Results Area */}
            <div className="flex-1 p-4 lg:p-6">
              <div className="space-y-6">
                <ActiveFiltersChips
                  filters={filters}
                  onRemoveFilter={handleRemoveFilter}
                  onClearAll={handleClearAllFilters}
                />

                <SearchResults
                  results={searchResults}
                  loading={loading}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdvancedSearchFilters;