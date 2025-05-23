import React from 'react';

export default  function SummaryDisplay({ name, email, rating, comments }) {
  return (
    <div>
      <h2>Summary</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Rating:</strong> {rating} / 5</p>
      <p><strong>Comments:</strong> {comments}</p>
    </div>
  );
}
