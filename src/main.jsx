import React from 'react';
import ReactDOM from 'react-dom/client';
import { CharactersApp } from './CharactersApp';
import './index.css';
import { LangProvider } from './hooks/langContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <LangProvider>
        <CharactersApp />
      </LangProvider>      
    </React.StrictMode>
)
