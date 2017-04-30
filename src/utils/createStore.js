import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import DevTools from '../devtools';


const middleware = [thunk];

if (__DEV__) {
 const logger = createLogger();
  middleware.push(logger)
}

 let store;
 if (__BROWSER__) {
   store = (reducers, history, initialState) => createStore(reducers, initialState, compose(
     applyMiddleware(...middleware, routerMiddleware(history)),
     (() => {
       if (__DEV__) {
         return (typeof window === 'object' && window.devToolsExtension
                  ? window.devToolsExtension()
                  : DevTools.instrument()
         );
       }
       return f => f;
     })()

   ));
 } else {
   store = history => applyMiddleware(...middleware, routerMiddleware(history))(createStore);
 }

 export default store;
