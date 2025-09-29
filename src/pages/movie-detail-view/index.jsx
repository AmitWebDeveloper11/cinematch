import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';

import Button from '../../components/ui/Button';
import MovieHero from './components/MovieHero';
import MovieSynopsis from './components/MovieSynopsis';
import CastCrew from './components/CastCrew';
import TechnicalDetails from './components/TechnicalDetails';
import UserReviews from './components/UserReviews';
import RelatedMovies from './components/RelatedMovies';

const MovieDetailView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const movieId = searchParams?.get('id') || '1';
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock movie data
  const movieData = {
    id: movieId,
    title: "The Grand Budapest Hotel",
    originalTitle: "The Grand Budapest Hotel",
    poster: "https://images.unsplash.com/photo-1489599162163-e3d9b6b7e8b8?w=400&h=600&fit=crop",
    rating: "8.1",
    releaseYear: "2014",
    releaseDate: "March 28, 2014",
    runtime: "99 minutes",
    country: "Germany, UK, USA",
    language: "English, French",
    genres: ["Comedy", "Drama", "Adventure"],
    director: "Wes Anderson",
    synopsis: `The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the protégé who becomes his most trusted friend. The story involves the theft of a priceless painting, the battle for an enormous family fortune, and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.\n\nSet against the backdrop of a changing Europe, this whimsical tale follows the misadventures of Gustave H and his protégé Zero as they navigate murder, inheritance disputes, and the rise of fascism. Anderson's signature visual style creates a nostalgic world of pastel colors, symmetrical compositions, and meticulous attention to detail that brings this fictional European republic to life.`,
    budget: "$25 million",
    boxOffice: "$174.6 million",
    awards: "4 Academy Awards, 7 BAFTA Awards",
    productionCompany: "Fox Searchlight Pictures",
    distributor: "Fox Searchlight Pictures",
    aspectRatio: "1.37:1 (Academy ratio)",
    soundMix: "DTS, Dolby Digital",
    color: "Color",
    filmingLocation: "Saxony, Germany"
  };

  const castData = [
    {
      name: "Ralph Fiennes",
      character: "Gustave H",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop"
    },
    {
      name: "F. Murray Abraham",
      character: "Zero Moustafa",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=200&fit=crop"
    },
    {
      name: "Mathieu Amalric",
      character: "Serge X",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=200&fit=crop"
    },
    {
      name: "Adrien Brody",
      character: "Dmitri",
      photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=200&fit=crop"
    },
    {
      name: "Willem Dafoe",
      character: "J.G. Jopling",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=200&fit=crop"
    },
    {
      name: "Jeff Goldblum",
      character: "Deputy Kovacs",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=200&fit=crop"
    }
  ];

  const crewData = [
    {
      name: "Wes Anderson",
      role: "Director",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
    },
    {
      name: "Robert D. Yeoman",
      role: "Cinematographer",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Adam Stockhausen",
      role: "Production Designer",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Barney Pilling",
      role: "Editor",
      photo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop"
    },
    {
      name: "Alexandre Desplat",
      role: "Composer",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
    },
    {
      name: "Milena Canonero",
      role: "Costume Designer",
      photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop"
    }
  ];

  const reviewsData = [
    {
      author: "Sarah Mitchell",
      rating: 5,
      date: "2024-08-20",
      content: `Wes Anderson has created another masterpiece with The Grand Budapest Hotel. The visual storytelling is absolutely stunning, with every frame looking like a work of art. Ralph Fiennes delivers a career-defining performance as Gustave H, bringing both comedy and pathos to the role. The film's exploration of friendship, loyalty, and the end of an era is both heartwarming and melancholic.`,
      helpful: 24,
      verified: true
    },
    {
      author: "Michael Chen",
      rating: 4,
      date: "2024-08-18",
      content: `A delightfully whimsical film that showcases Anderson's unique directorial style. The production design is impeccable, creating a fairy-tale world that feels both nostalgic and timeless. While some might find the pacing slow, I found it perfectly suited to the story's contemplative nature. The ensemble cast is excellent, with each actor bringing their A-game.`,
      helpful: 18,
      verified: false
    },
    {
      author: "Emma Rodriguez",
      rating: 5,
      date: "2024-08-15",
      content: `This movie is pure visual poetry. Anderson's attention to detail is extraordinary - from the symmetrical compositions to the pastel color palette, everything serves the story. The relationship between Gustave and Zero is beautifully developed, and the film's themes about civilization and barbarism are more relevant than ever. A true cinematic gem.`,
      helpful: 31,
      verified: true
    },
    {
      author: "David Thompson",
      rating: 3,
      date: "2024-08-12",
      content: `While I appreciate the craftsmanship and visual beauty of The Grand Budapest Hotel, I found myself somewhat disconnected from the story. Anderson's style, while distinctive, can sometimes feel overly mannered. That said, Ralph Fiennes is absolutely brilliant, and the film's technical achievements are undeniable.`,
      helpful: 12,
      verified: false
    },
    {
      author: "Lisa Park",
      rating: 4,
      date: "2024-08-10",
      content: `A charming and visually stunning film that transports you to another world. The humor is subtle and sophisticated, and the story, while simple on the surface, has surprising depth. The film's meditation on the passing of time and the loss of elegance in the modern world is both beautiful and sad.`,
      helpful: 19,
      verified: true
    }
  ];

  const relatedMoviesData = [
    {
      id: "2",
      title: "Moonrise Kingdom",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
      rating: "7.8",
      releaseYear: "2012",
      genre: "Comedy"
    },
    {
      id: "3",
      title: "The Royal Tenenbaums",
      poster: "https://images.unsplash.com/photo-1489599162163-e3d9b6b7e8b8?w=300&h=450&fit=crop",
      rating: "7.6",
      releaseYear: "2001",
      genre: "Drama"
    },
    {
      id: "4",
      title: "Isle of Dogs",
      poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
      rating: "7.8",
      releaseYear: "2018",
      genre: "Animation"
    },
    {
      id: "5",
      title: "The French Dispatch",
      poster: "https://images.unsplash.com/photo-1489599162163-e3d9b6b7e8b8?w=300&h=450&fit=crop",
      rating: "7.1",
      releaseYear: "2021",
      genre: "Comedy"
    },
    {
      id: "6",
      title: "Fantastic Mr. Fox",
      poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
      rating: "7.9",
      releaseYear: "2009",
      genre: "Animation"
    },
    {
      id: "7",
      title: "Rushmore",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
      rating: "7.7",
      releaseYear: "1998",
      genre: "Comedy"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Check if movie is in watchlist (mock)
    const watchlist = JSON.parse(localStorage.getItem('movieWatchlist') || '[]');
    setIsInWatchlist(watchlist?.includes(movieId));

    return () => clearTimeout(timer);
  }, [movieId]);

  const handleAddToWatchlist = () => {
    const watchlist = JSON.parse(localStorage.getItem('movieWatchlist') || '[]');
    
    if (isInWatchlist) {
      const updatedWatchlist = watchlist?.filter(id => id !== movieId);
      localStorage.setItem('movieWatchlist', JSON.stringify(updatedWatchlist));
      setIsInWatchlist(false);
    } else {
      watchlist?.push(movieId);
      localStorage.setItem('movieWatchlist', JSON.stringify(watchlist));
      setIsInWatchlist(true);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground font-body">Loading movie details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Back Button */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={handleGoBack}
              className="text-muted-foreground hover:text-foreground"
            >
              Back to Results
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-8">
          {/* Movie Hero Section */}
          <MovieHero 
            movie={movieData}
            onAddToWatchlist={handleAddToWatchlist}
            isInWatchlist={isInWatchlist}
          />

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <MovieSynopsis movie={movieData} />
              <CastCrew cast={castData} crew={crewData} />
              <UserReviews reviews={reviewsData} />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <TechnicalDetails movie={movieData} />
            </div>
          </div>

          {/* Related Movies */}
          <RelatedMovies movies={relatedMoviesData} />
        </div>
      </main>
    </div>
  );
};

export default MovieDetailView;