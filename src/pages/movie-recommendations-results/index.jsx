import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import FilterSummaryBar from './components/FilterSummaryBar';
import QuickFilterChips from './components/QuickFilterChips';
import SearchAndSort from './components/SearchAndSort';
import MovieGrid from './components/MovieGrid';
import EmptyState from './components/EmptyState';
import FloatingRefreshButton from './components/FloatingRefreshButton';

const MovieRecommendationsResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // State management
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSort, setCurrentSort] = useState('rating');
  const [quickFilters, setQuickFilters] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  // Get filters from URL params
  const filters = {
    genre: searchParams?.get('genre') || 'Action',
    country: searchParams?.get('country') || 'USA',
    language: searchParams?.get('language') || 'English'
  };

  // Mock movie data
  const mockMovies = [
    {
      id: 1,
      title: "The Dark Knight",
      poster: "https://images.unsplash.com/photo-1489599735734-79b4d2fea9c2?w=400&h=600&fit=crop",
      rating: 9.0,
      year: 2008,
      duration: "152 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`
    },
    {
      id: 2,
      title: "Inception",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      rating: 8.8,
      year: 2010,
      duration: "148 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`
    },
    {
      id: 3,
      title: "Mad Max: Fury Road",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      rating: 8.1,
      year: 2015,
      duration: "120 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.`
    },
    {
      id: 4,
      title: "John Wick",
      poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      rating: 7.4,
      year: 2014,
      duration: "101 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.`
    },
    {
      id: 5,
      title: "Die Hard",
      poster: "https://images.unsplash.com/photo-1489599735734-79b4d2fea9c2?w=400&h=600&fit=crop",
      rating: 8.2,
      year: 1988,
      duration: "132 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.`
    },
    {
      id: 6,
      title: "The Matrix",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      rating: 8.7,
      year: 1999,
      duration: "136 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.`
    },
    {
      id: 7,
      title: "Gladiator",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      rating: 8.5,
      year: 2000,
      duration: "155 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.`
    },
    {
      id: 8,
      title: "Heat",
      poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      rating: 8.3,
      year: 1995,
      duration: "170 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.`
    },
    {
      id: 9,
      title: "Casino Royale",
      poster: "https://images.unsplash.com/photo-1489599735734-79b4d2fea9c2?w=400&h=600&fit=crop",
      rating: 8.0,
      year: 2006,
      duration: "144 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007.`
    },
    {
      id: 10,
      title: "Mission: Impossible",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      rating: 7.1,
      year: 1996,
      duration: "110 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.`
    },
    {
      id: 11,
      title: "Speed",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop",
      rating: 7.3,
      year: 1994,
      duration: "116 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `A young police officer must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph.`
    },
    {
      id: 12,
      title: "Top Gun",
      poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=600&fit=crop",
      rating: 6.9,
      year: 1986,
      duration: "110 min",
      country: "USA",
      language: "English",
      genre: "Action",
      description: `As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.`
    }
  ];

  // Initialize movies on component mount
  useEffect(() => {
    const loadInitialMovies = () => {
      setLoading(true);
      setTimeout(() => {
        setMovies(mockMovies);
        setFilteredMovies(mockMovies);
        setLoading(false);
      }, 1000);
    };

    loadInitialMovies();
  }, []);

  // Filter and sort movies
  useEffect(() => {
    let filtered = [...movies];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(movie =>
        movie?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        movie?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply quick filters
    if (quickFilters?.rating === '8+') {
      filtered = filtered?.filter(movie => movie?.rating >= 8);
    }
    if (quickFilters?.year === '2020+') {
      filtered = filtered?.filter(movie => movie?.year >= 2020);
    }
    if (quickFilters?.popular === 'popular') {
      filtered = filtered?.filter(movie => movie?.rating >= 7.5);
    }
    if (quickFilters?.award === 'award') {
      filtered = filtered?.filter(movie => movie?.rating >= 8.5);
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (currentSort) {
        case 'rating':
          return b?.rating - a?.rating;
        case 'year':
          return b?.year - a?.year;
        case 'popularity':
          return b?.rating - a?.rating;
        case 'title':
          return a?.title?.localeCompare(b?.title);
        default:
          return 0;
      }
    });

    setFilteredMovies(filtered);
  }, [movies, searchQuery, quickFilters, currentSort]);

  // Handle search
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // Handle sort
  const handleSort = useCallback((sortValue) => {
    setCurrentSort(sortValue);
  }, []);

  // Handle quick filter change
  const handleQuickFilterChange = useCallback((filterKey, filterValue) => {
    setQuickFilters(prev => ({
      ...prev,
      [filterKey]: prev?.[filterKey] === filterValue ? null : filterValue
    }));
  }, []);

  // Handle edit filters
  const handleEditFilters = useCallback(() => {
    navigate('/home-movie-discovery');
  }, [navigate]);

  // Handle refresh recommendations
  const handleRefreshRecommendations = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // Shuffle the movies array to simulate new recommendations
      const shuffled = [...mockMovies]?.sort(() => Math.random() - 0.5);
      setMovies(shuffled);
      setRefreshing(false);
    }, 1500);
  }, []);

  // Handle load more
  const handleLoadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      // Simulate loading more movies (in real app, this would be an API call)
      setHasMore(false);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Filter Summary Bar */}
        <FilterSummaryBar
          filters={filters}
          onEditFilters={handleEditFilters}
          onRefreshRecommendations={handleRefreshRecommendations}
        />

        {/* Quick Filter Chips */}
        <QuickFilterChips
          activeFilters={quickFilters}
          onFilterChange={handleQuickFilterChange}
        />

        {/* Search and Sort */}
        <SearchAndSort
          onSearch={handleSearch}
          onSort={handleSort}
          currentSort={currentSort}
        />

        {/* Results Count */}
        {!loading && (
          <div className="px-4 py-2 border-b border-border">
            <p className="text-sm text-muted-foreground">
              {filteredMovies?.length} movies found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Movie Grid or Empty State */}
        {filteredMovies?.length > 0 ? (
          <MovieGrid
            movies={filteredMovies}
            loading={loading}
            hasMore={hasMore}
            onLoadMore={handleLoadMore}
          />
        ) : !loading ? (
          <EmptyState
            filters={filters}
            onRefreshRecommendations={handleRefreshRecommendations}
          />
        ) : (
          <MovieGrid
            movies={[]}
            loading={loading}
            hasMore={false}
            onLoadMore={() => {}}
          />
        )}

        {/* Floating Refresh Button */}
        <FloatingRefreshButton
          onClick={handleRefreshRecommendations}
          loading={refreshing}
        />
      </main>
    </div>
  );
};

export default MovieRecommendationsResults;