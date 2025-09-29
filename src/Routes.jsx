import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import MovieDetailView from './pages/movie-detail-view';
import MovieRecommendationsResults from './pages/movie-recommendations-results';
import HomeMovieDiscovery from './pages/home-movie-discovery';
import AdvancedSearchFilters from './pages/advanced-search-filters';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AdvancedSearchFilters />} />
        <Route path="/movie-detail-view" element={<MovieDetailView />} />
        <Route path="/movie-recommendations-results" element={<MovieRecommendationsResults />} />
        <Route path="/home-movie-discovery" element={<HomeMovieDiscovery />} />
        <Route path="/advanced-search-filters" element={<AdvancedSearchFilters />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
