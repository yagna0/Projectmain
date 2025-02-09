import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Hello from React!</h1>;
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root'); // Make sure you have a <div id="root"></div> in your HTML

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  } else {
    console.error("Element with ID 'root' not found!");
  }
});