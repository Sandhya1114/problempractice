import React from 'react';

export default function NameInput({ name, setName }) {
  return (
    <div>
      <label>Name:</label>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}
