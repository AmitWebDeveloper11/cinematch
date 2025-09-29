import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CastCrew = ({ cast, crew }) => {
  const [activeTab, setActiveTab] = useState('cast');

  const CastMember = ({ member }) => (
    <div className="flex-shrink-0 w-32 space-y-2">
      <div className="w-32 h-40 rounded-lg overflow-hidden bg-muted">
        <Image
          src={member?.photo}
          alt={member?.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center space-y-1">
        <h4 className="font-body font-medium text-foreground text-sm leading-tight">
          {member?.name}
        </h4>
        <p className="text-muted-foreground text-xs font-body">
          {member?.character || member?.role}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveTab('cast')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
              activeTab === 'cast' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name="Users" size={18} color="currentColor" />
            <span className="font-body font-medium">Cast</span>
          </button>
          <button
            onClick={() => setActiveTab('crew')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth ${
              activeTab === 'crew' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name="Camera" size={18} color="currentColor" />
            <span className="font-body font-medium">Crew</span>
          </button>
        </div>
      </div>
      {/* Cast Section */}
      {activeTab === 'cast' && (
        <div className="space-y-4">
          <h3 className="text-lg font-heading font-bold text-foreground">Main Cast</h3>
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {cast?.map((member, index) => (
              <CastMember key={index} member={member} />
            ))}
          </div>
        </div>
      )}
      {/* Crew Section */}
      {activeTab === 'crew' && (
        <div className="space-y-6">
          <h3 className="text-lg font-heading font-bold text-foreground">Key Crew</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {crew?.map((member, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-background">
                  <Image
                    src={member?.photo}
                    alt={member?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-medium text-foreground text-sm truncate">
                    {member?.name}
                  </h4>
                  <p className="text-muted-foreground text-xs font-body">
                    {member?.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CastCrew;