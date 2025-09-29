import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Discover',
      path: '/home-movie-discovery',
      icon: 'Compass',
      tooltip: 'Find personalized movie recommendations'
    },
    {
      label: 'Search',
      path: '/advanced-search-filters',
      icon: 'Search',
      tooltip: 'Advanced movie search and filters'
    },
    {
      label: 'My Lists',
      path: '/my-lists',
      icon: 'BookmarkPlus',
      tooltip: 'Your saved movies and watchlists'
    },
    {
      label: 'History',
      path: '/viewing-history',
      icon: 'Clock',
      tooltip: 'Your viewing and recommendation history'
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Logo */}
        <Link 
          to="/home-movie-discovery" 
          className="flex items-center space-x-2 transition-smooth hover:opacity-80"
          onClick={closeMobileMenu}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
            <Icon name="Film" size={20} color="white" />
          </div>
          <span className="text-xl font-heading font-bold text-foreground">
            CineMatch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth hover:bg-muted group ${
                isActivePath(item?.path) 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title={item?.tooltip}
            >
              <Icon 
                name={item?.icon} 
                size={18} 
                color="currentColor"
                className="transition-smooth group-hover:scale-110"
              />
              <span className="font-body font-medium text-sm">
                {item?.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* User Profile & Mobile Menu Button */}
        <div className="flex items-center space-x-2">
          {/* User Profile (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="Bell"
              iconPosition="left"
              className="text-muted-foreground hover:text-foreground"
            >
              Notifications
            </Button>
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center cursor-pointer transition-smooth hover:scale-110">
              <Icon name="User" size={18} color="var(--color-accent-foreground)" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="md:hidden text-foreground"
            iconName={isMobileMenuOpen ? "X" : "Menu"}
          />
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="px-4 py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-smooth ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={20} color="currentColor" />
                <span className="font-body font-medium">
                  {item?.label}
                </span>
              </Link>
            ))}
            
            {/* Mobile User Actions */}
            <div className="pt-4 mt-4 border-t border-border space-y-2">
              <Link
                to="/notifications"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
              >
                <Icon name="Bell" size={20} color="currentColor" />
                <span className="font-body font-medium">Notifications</span>
              </Link>
              <Link
                to="/profile"
                onClick={closeMobileMenu}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
              >
                <Icon name="User" size={20} color="currentColor" />
                <span className="font-body font-medium">Profile</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;