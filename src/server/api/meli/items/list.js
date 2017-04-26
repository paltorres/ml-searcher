/**
 * Search Items at MELI API, and returns an item list.
 *
 * */

import { PRODUCT_LIMIT , MELI_ROOT_URL } from '../constants';
import _ from 'lodash';
import { stringify } from 'querystring';
import fetch from 'node-fetch';

import { getPriceObject } from '../utils';


/**
 * Search items at MELI API given a query.
 *
 * The function returns the request with the follow shape:
 * {
 *  categories: [String, String, String, ...],
 *  items: [
 *    {
 *      "id": String,
 *      "title": String,
 *      "price": {
 *        "currency": String,
 *        "amount": Number,
 *        "decimals": Number
 *      },
 *      “picture”: String,
 *      "condition": String,
 *      "free_shipping": Boolean
 *    },
 *    {...},
 * }
 *
 *
 * @param {string} q The given search term to search.
 * @param {Function} cb Callback to be called once the function get ends.
 *
 * Error object shapes:
 * {error: message: 'Error parsing response'}
 * {error: message: 'MELI Api error'}
 *
 * */

let mock;

export default function searchItems(q, cb) {
  if (!q) return cb(null, {result: [], categories: []});

  if(mock) {
    return cb(null, mock);
  }

  fetch(MELI_ROOT_URL + 'search?'+ stringify({q, limit: PRODUCT_LIMIT})).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    parseResponse(jsonResponse, cb);
  }).catch(() => {
    cb({error: {message: 'MELI Api error'}});
  });
};

// parse function
function parseResponse(data, cb) {
  const result = {};

  try {
    result.items = _.map(data.results, (item) => {
      const {id, title, thumbnail, condition, shipping} = item,
        price = getPriceObject(item),
        { free_shipping } = shipping,
        address = _.get(item, 'address.state_name');

      return {id, title, condition, free_shipping, address, picture: thumbnail, price };
    });

    var categoriesList = _.find(data.filters, {id: 'category'});

    if (_.isObject(categoriesList)) {
      let categoryFilter = _.get(_.find(categoriesList.values, 'path_from_root'), 'path_from_root');

      categoriesList = _.map(categoryFilter, 'name');
    }

    result.categories = categoriesList || [];

    mock = result;
    cb(null, result);
  } catch (e) {
    console.error(e);
    cb({error: {message: 'Error parsing response'}})
  }
}
