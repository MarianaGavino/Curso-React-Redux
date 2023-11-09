import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux';
import { logger } from './middleware'
import thunk from 'redux-thunk';
//import { elementsReducer } from './reducers/elements';
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhacers = compose(applyMiddleware(thunk,logger));

const store = createStore(rootReducer, composedEnhacers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

