import React from 'react';
import './recommendationItemSkeleton.css';

const RecommendationSkeleton: React.FC = () => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-img-top skeleton"></div>
        <div className="card-body">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSkeleton;
