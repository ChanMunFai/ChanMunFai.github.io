import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  const root = hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement); 
  root.render(<StrictApp />);
}



