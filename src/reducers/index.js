/**
 * Created by Zhengfeng Yao on 16/8/27.
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
