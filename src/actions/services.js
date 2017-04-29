/**
 * Action services module.
 *
 * The services actions module has the function that makes API request
 * and returns an action to be dispatched.
 *
 * */

import { SERVICES } from '../actionTypes';
import services from '../utils/servicies';

/**
 * searchItems.
 *
 * Search items by the query string `search`.
 *
 * @param {object} query The query object has the url's query strings.
 *
 * */
export function searchItems({location: { query } }) {
  const { search } = query;

  return services.getItemList(search).then((response) => {
    return {
      type: SERVICES.SEARCHED_ITEMS,
      payload: response
    }
  });
}

/**
 * fetchItem.
 *
 * Fetch an item by id.
 *
 * @param {string} itemId An item's id from the url parameter.
 *
 * */
export function fetchItem({ params: { itemId } }) {
  return services.getItem(itemId).then((response) => {
    return {
      type: SERVICES.FETCHED_ITEM,
      payload: response
    }
  });
}
