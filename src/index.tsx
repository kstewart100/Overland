import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

function dismissAppLoader() {
  const loader = document.getElementById('app-loader');
  if (!loader) return;
  loader.classList.add('app-loader--hidden');
  window.setTimeout(() => loader.remove(), 300);
}

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element #root not found');

createRoot(rootEl).render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <App />
  </BrowserRouter>
);
dismissAppLoader();