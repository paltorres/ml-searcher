/**
 * Created by Zhengfeng Yao on 16/8/27.
 */
 import { createStore, applyMiddleware, compose } from 'redux';
 import createLogger from 'redux-logger';
 import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

 import DevTools from '../devtools';

 const logger = createLogger();
 const middleware = [thunk, logger];
 let store;
 if (__BROWSER__ && __DEV__) {
   store = (reducers, history, initialState) => createStore(reducers, initialState, compose(
     applyMiddleware(...middleware, routerMiddleware(history)),
     (typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())
   ));
 } else {
   store = history => applyMiddleware(...middleware, routerMiddleware(history))(createStore);
 }

 export default store;
