import React from 'react';

export default function EmailInput({ email, setEmail }) {
  return (
    <div>
      <label>Email:</label>
      <input value={email} onChange={e => setEmail(e.target.value)} />
    </div>
  );
}
