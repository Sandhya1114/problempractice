import React from 'react';
import UserInfo from './UserInfo';
import RatingSection from './RatingSection';
import CommentsBox from './CommentBox';

export default function FeedbackForm({ name, setName, email, setEmail, rating, setRating, comments, setComments }) {
  return (
    <div>
      <UserInfo name={name} setName={setName} email={email} setEmail={setEmail} />
      <RatingSection rating={rating} setRating={setRating} />
      <CommentsBox comments={comments} setComments={setComments} />
    </div>
  );
}

