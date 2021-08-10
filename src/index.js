import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { counterReducer } from './reducers';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(counterReducer, applyMiddleware(createLogger()))}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);