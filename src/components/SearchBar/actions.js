/**
 *  SearchBar actions.
 * */
import { push } from 'react-router-redux';

import services from '../../utils/servicies';
import { SERVICES } from '../../actionTypes';


const { SEARCH_ITEMS } = SERVICES;
const { getItemList } = services;

export default (term) => {
  const request = getItemList(term);
  debugger;
  return (dispatch) => {
    dispatch(push(`/items?search=${term}`));

    request.then((response) => {
      dispatch({
        type: SEARCH_ITEMS,
        payload: response
      });
    }).catch((error) => {
      console.error(error);
    });
  }
}
