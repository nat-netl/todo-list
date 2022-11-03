import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import setupStore from './store/index';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
reportWebVitals();
