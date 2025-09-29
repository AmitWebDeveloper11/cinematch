import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const ContentAttributesFilter = ({ filters, onFilterChange }) => {
  const certificationOptions = [
    { value: '', label: 'All Ratings' },
    { value: 'g', label: 'G - General Audiences' },
    { value: 'pg', label: 'PG - Parental Guidance' },
    { value: 'pg-13', label: 'PG-13 - Parents Strongly Cautioned' },
    { value: 'r', label: 'R - Restricted' },
    { value: 'nc-17', label: 'NC-17 - Adults Only' },
    { value: 'nr', label: 'NR - Not Rated' }
  ];

  const handleRuntimeChange = (type, value) => {
    const runtime = parseInt(value) || '';
    if (runtime < 0) return;
    if (type === 'min' && filters?.maxRuntime && runtime > filters?.maxRuntime) return;
    if (type === 'max' && filters?.minRuntime && runtime < filters?.minRuntime) return;
    
    onFilterChange(type === 'min' ? 'minRuntime' : 'maxRuntime', runtime);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          label="Min Runtime (minutes)"
          type="number"
          placeholder="60"
          min="1"
          max="600"
          value={filters?.minRuntime || ''}
          onChange={(e) => handleRuntimeChange('min', e?.target?.value)}
        />
        
        <Input
          label="Max Runtime (minutes)"
          type="number"
          placeholder="180"
          min="1"
          max="600"
          value={filters?.maxRuntime || ''}
          onChange={(e) => handleRuntimeChange('max', e?.target?.value)}
        />
        
        <Select
          label="Content Rating"
          options={certificationOptions}
          value={filters?.certification}
          onChange={(value) => onFilterChange('certification', value)}
        />
      </div>
      <div className="text-sm text-muted-foreground space-y-1">
        <p><strong>Runtime Examples:</strong> Short films (1-40 min), Feature films (80-180 min), Epic films (180+ min)</p>
        <p><strong>Content Ratings:</strong> Based on MPAA (US) rating system for content appropriateness</p>
      </div>
    </div>
  );
};

export default ContentAttributesFilter;