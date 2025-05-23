import React from 'react';

export default function StarButton({ number, selected, onClick }) {
  return (
    <button onClick={onClick} style={{ color: selected ? 'gold' : 'gray' }}>
      ★
    </button>
  );
}
