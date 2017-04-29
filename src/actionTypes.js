/**
 * Action types module.
 * */

import composeConstants from './utils/composeConstants';

module.exports = composeConstants({
  // SERVICES: ['SEARCH_ITEMS', 'GET_ITEM_DETAIL']
  SERVICES: ['SEARCHED_ITEMS', 'FETCHED_ITEM']
});
