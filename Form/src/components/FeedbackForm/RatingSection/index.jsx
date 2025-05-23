import React from 'react';
import StarSelector from './StarSelector';

export default function RatingSection({ rating, setRating }) {
  return (
    <div>
      <label>Rating:</label>
      <StarSelector rating={rating} setRating={setRating} />
    </div>
  );
}

