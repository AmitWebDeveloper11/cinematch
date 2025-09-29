import React from 'react';
import Icon from '../../../components/AppIcon';

const FloatingRefreshButton = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-modal hover:bg-primary/90 transition-smooth z-40 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Refresh recommendations"
    >
      <Icon 
        name="RefreshCw" 
        size={24} 
        color="currentColor" 
        className={loading ? 'animate-spin' : ''}
      />
    </button>
  );
};

export default FloatingRefreshButton;