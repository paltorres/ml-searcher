/**
 *  SearchBar actions.
 * */
import { push } from 'react-router-redux';


export default function searchItems(term) {

  return (dispatch) => {
    dispatch(push(`/items?search=${term}`));
  }
}
