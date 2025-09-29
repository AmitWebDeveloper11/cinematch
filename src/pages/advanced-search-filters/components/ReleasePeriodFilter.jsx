import React from 'react';
import Input from '../../../components/ui/Input';

const ReleasePeriodFilter = ({ filters, onFilterChange }) => {
  const currentYear = new Date()?.getFullYear();

  const handleYearChange = (type, value) => {
    const year = parseInt(value) || '';
    if (type === 'from' && year > currentYear) return;
    if (type === 'to' && year > currentYear) return;
    if (type === 'from' && filters?.yearTo && year > filters?.yearTo) return;
    if (type === 'to' && filters?.yearFrom && year < filters?.yearFrom) return;
    
    onFilterChange(type === 'from' ? 'yearFrom' : 'yearTo', year);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="From Year"
          type="number"
          placeholder="1900"
          min="1900"
          max={currentYear}
          value={filters?.yearFrom || ''}
          onChange={(e) => handleYearChange('from', e?.target?.value)}
        />
        
        <Input
          label="To Year"
          type="number"
          placeholder={currentYear?.toString()}
          min="1900"
          max={currentYear}
          value={filters?.yearTo || ''}
          onChange={(e) => handleYearChange('to', e?.target?.value)}
        />
      </div>
      <div className="text-sm text-muted-foreground">
        <p>Select a year range to filter movies by release date. Leave empty for no restriction.</p>
      </div>
    </div>
  );
};

export default ReleasePeriodFilter;