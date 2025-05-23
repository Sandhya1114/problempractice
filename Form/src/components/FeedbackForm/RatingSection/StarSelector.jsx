import React from 'react';
import StarButton from './StarButton';

export default function StarSelector({ rating, setRating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(num => (
        <StarButton
          key={num}
          number={num}
          selected={num <= rating}
          onClick={() => setRating(num)}
        />
      ))}
    </div>
  );
}


