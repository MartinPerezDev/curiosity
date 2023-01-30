import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { ArticlesProvider } from './context/ArticlesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ArticlesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ArticlesProvider>
    </ThemeProvider>
  </React.StrictMode>
);