import { SERVICES } from '../../actionTypes';

const { SEARCH_ITEMS } = SERVICES;


export default (state=null, action) => {
  switch (action.type) {
    case SEARCH_ITEMS:
      return state;
      // return action.items;
  }
  return state;
}