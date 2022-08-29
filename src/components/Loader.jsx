import React from 'react';
import '@styles/loader.css';

export const Loader = () => {
  return (
    <main className="loader__container">
      <svg className="loader" height="100" width="100" viewBox="0 0 100 100">
        <circle className="loader__circle" cx="50" cy="50" r="45"></circle>
        <circle className="loader__animate" cx="50" cy="50" r="45"></circle>
      </svg>
    </main>    
  )
}