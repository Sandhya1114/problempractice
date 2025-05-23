import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import SummaryDisplay from './components/SummaryDisplay';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  return (
    <div>
      <Header />
      <FeedbackForm
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        rating={rating} setRating={setRating}
        comments={comments} setComments={setComments}
      />
      <SummaryDisplay
        name={name} email={email} rating={rating} comments={comments}
      />
    </div>
  );
}

export default App;