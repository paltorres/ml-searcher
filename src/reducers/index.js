/**
 * The search reduce module.
 *
 * Import all reducers and put it all.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import app from './app';
import searchReducer from '../components/SearchBar/reducer';


export default combineReducers({
  app,
  items: searchReducer,
  form: formReducer,
  routing: routerReducer,
});
