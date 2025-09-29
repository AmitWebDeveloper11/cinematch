import React from 'react';
import Icon from '../../../components/AppIcon';

const WelcomeSection = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
          <Icon name="Film" size={32} color="white" />
        </div>
      </div>
      
      <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
        Discover Your Next Favorite Movie
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Get personalized movie recommendations based on your preferred genre, country, and language. 
        Explore cinema from around the world tailored to your taste.
      </p>
      
      <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Icon name="Globe" size={16} color="var(--color-accent)" />
          <span>25+ Countries</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Languages" size={16} color="var(--color-accent)" />
          <span>20+ Languages</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Star" size={16} color="var(--color-accent)" />
          <span>All Genres</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;