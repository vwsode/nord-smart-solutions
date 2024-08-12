import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import { SearchProvider } from './context/SearchContext';
import App from './App';
import { client } from './apollo/client';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
