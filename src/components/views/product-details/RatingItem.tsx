'use client';

import React from 'react';
import { Rating as Rate } from 'primereact/rating';
import moment from 'moment';

import { DisplayDateText } from '@components';
import { DTO } from '@tot/core/types';

const RatingItem = ({ review }: { review: DTO.ICustomerReviewDTO }) => {
  return (
    <div className="rating-item w-100 rounded-2 my-3">
      <div>
        <h6 className="fw-bold"> {review.userName} </h6>
      </div>
      <div>
        <p className="text-muted my-3">
          (<DisplayDateText date={review.createdDate.toString()} format="DD/MM/YYYY HH:mm" time="12" fromNow />)
        </p>
      </div>
      <div className="flex-start">
        <Rate stars={5} value={review.rating} cancel={false} readOnly />
      </div>
      <div>
        <p className="text-muted">{review.review}</p>
      </div>
    </div>
  );
};

export default RatingItem;
