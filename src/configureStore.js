import { browserHistory } from 'react-router';

import { createStore } from './utils';
import makeRootReducer from './reducers';


const store = createStore(makeRootReducer, browserHistory);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const reducers = require('./reducers/index').default;
    store.replaceReducer(reducers);
  })
}

export default store;
