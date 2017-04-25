/**
 * The search reduce module.
 *
 * Import all reducers and put it all.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import searchReducer from '../components/SearchBar/reducer';
import breadcrumbReducer from '../components/Breadcrumb/reducer';


export default combineReducers({
  items: searchReducer,
  categories: breadcrumbReducer,
  form: formReducer,
  routing: routerReducer,
});
