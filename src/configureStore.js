import { browserHistory } from 'react-router';

import { createStore } from './utils';
import makeRootReducer from './reducers';

// setting the initial state from the server.
const initialState = window.__INITIAL_STATE__;

const store = createStore(makeRootReducer, browserHistory, initialState);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const reducers = require('./reducers/index').default;
    store.replaceReducer(reducers);
  })
}

export default store;
