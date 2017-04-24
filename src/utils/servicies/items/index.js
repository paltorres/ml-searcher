/**
 * Items service.
 *
 * All functions returns a request promise.
 *
 * */

import fetch from '../../../core/fetch';
import { API_PREFIX } from '../../../constants';

const ITEMS_API = `${API_PREFIX}/items`;

/**
 * Given a search term fetch an item list from the api.
 *
 * @param {string} term {Required} The search term.
 * */
function getItemList(term='') {
  return fetch(`${ITEMS_API}?q=${term}`).then(r => {
    return r.json()
  });
}

/**
 * Given an item's id fetch its detail from the api.
 *
 * @param {string|int} id Item's id.
 * */
function getItem(id) {
  return fetch(`${ITEMS_API}/${id}`).then(r => {return r.json()});
}

export default { getItem, getItemList };
