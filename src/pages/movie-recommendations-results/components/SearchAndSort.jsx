import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const SearchAndSort = ({ onSearch, onSort, currentSort }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const sortOptions = [
    { value: 'rating', label: 'Rating (High to Low)', icon: 'Star' },
    { value: 'year', label: 'Release Year (New to Old)', icon: 'Calendar' },
    { value: 'popularity', label: 'Popularity', icon: 'TrendingUp' },
    { value: 'title', label: 'Title (A to Z)', icon: 'AlphabeticalOrder' }
  ];

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSortSelect = (sortValue) => {
    onSort(sortValue);
    setShowSortMenu(false);
  };

  const getCurrentSortLabel = () => {
    const current = sortOptions?.find(option => option?.value === currentSort);
    return current ? current?.label : 'Sort by';
  };

  return (
    <div className="px-4 py-4 bg-muted/30 border-b border-border">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search within recommendations..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Icon name="Search" size={16} color="var(--color-muted-foreground)" />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            iconName="ArrowUpDown"
            iconPosition="left"
            onClick={() => setShowSortMenu(!showSortMenu)}
            className="min-w-[140px] justify-between"
          >
            <span className="truncate">{getCurrentSortLabel()}</span>
          </Button>
          
          {showSortMenu && (
            <div className="absolute right-0 top-full mt-1 w-56 bg-popover border border-border rounded-lg shadow-modal z-50">
              <div className="py-1">
                {sortOptions?.map((option) => (
                  <button
                    key={option?.value}
                    onClick={() => handleSortSelect(option?.value)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-muted transition-smooth ${
                      currentSort === option?.value ? 'bg-muted text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon name={option?.icon} size={16} color="currentColor" />
                    <span>{option?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;