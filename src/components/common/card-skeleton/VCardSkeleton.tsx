import React from 'react';

const VCardSkeleton = () => {
  return (
    <div className="cards-skeleton">
      <div className="card-skeleton is-loading-skeleton">
        <div className="image-skeleton"></div>
        <div className="content-skeleton">
          <h2></h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default VCardSkeleton;
