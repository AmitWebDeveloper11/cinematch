import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UserReviews = ({ reviews }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const sortedReviews = [...reviews]?.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'highest':
        return b?.rating - a?.rating;
      case 'lowest':
        return a?.rating - b?.rating;
      default:
        return 0;
    }
  });

  const displayedReviews = showAllReviews ? sortedReviews : sortedReviews?.slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5]?.map((star) => (
        <Icon
          key={star}
          name="Star"
          size={14}
          color={star <= rating ? "var(--color-accent)" : "var(--color-muted-foreground)"}
          className={star <= rating ? "fill-current" : ""}
        />
      ))}
    </div>
  );

  const ReviewCard = ({ review }) => (
    <div className="bg-muted rounded-lg p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-body font-medium text-sm">
              {review?.author?.charAt(0)?.toUpperCase()}
            </span>
          </div>
          <div>
            <h4 className="font-body font-medium text-foreground">{review?.author}</h4>
            <div className="flex items-center space-x-2">
              <StarRating rating={review?.rating} />
              <span className="text-muted-foreground text-sm font-body">
                {formatDate(review?.date)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="ThumbsUp" size={14} color="var(--color-muted-foreground)" />
          <span className="text-muted-foreground text-sm font-body">{review?.helpful}</span>
        </div>
      </div>
      
      <p className="text-muted-foreground font-body leading-relaxed">
        {review?.content}
      </p>
      
      {review?.verified && (
        <div className="flex items-center space-x-1 text-success">
          <Icon name="CheckCircle" size={14} color="currentColor" />
          <span className="text-sm font-body">Verified Purchase</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-heading font-bold text-foreground">User Reviews</h2>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-sm font-body">
            {reviews?.length}
          </span>
        </div>
        <Icon name="MessageSquare" size={20} color="var(--color-muted-foreground)" />
      </div>
      {/* Review Statistics */}
      <div className="mb-6 p-4 bg-muted rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <span className="text-muted-foreground font-body">Average Rating</span>
          <div className="flex items-center space-x-2">
            <StarRating rating={Math.round(reviews?.reduce((acc, review) => acc + review?.rating, 0) / reviews?.length)} />
            <span className="font-body font-medium text-foreground">
              {(reviews?.reduce((acc, review) => acc + review?.rating, 0) / reviews?.length)?.toFixed(1)}
            </span>
          </div>
        </div>
        
        {/* Rating Distribution */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1]?.map((rating) => {
            const count = reviews?.filter(review => review?.rating === rating)?.length;
            const percentage = (count / reviews?.length) * 100;
            return (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm font-body text-muted-foreground w-8">
                  {rating}★
                </span>
                <div className="flex-1 bg-background rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-smooth"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm font-body text-muted-foreground w-8">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Sort Options */}
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-muted-foreground font-body text-sm">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e?.target?.value)}
          className="bg-muted text-foreground border border-border rounded-lg px-3 py-1 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>
      {/* Reviews List */}
      <div className="space-y-4">
        {displayedReviews?.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      {/* Show More/Less Button */}
      {reviews?.length > 3 && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAllReviews(!showAllReviews)}
            iconName={showAllReviews ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {showAllReviews ? 'Show Less Reviews' : `Show All ${reviews?.length} Reviews`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserReviews;