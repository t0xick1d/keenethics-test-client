import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { bicycleApi } from './redux-store/bicycle/bicycleApi';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={bicycleApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

