import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './components/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <UserProvider>
    <App />
    </UserProvider>
  </BrowserRouter> 
  </StrictMode>,
)
