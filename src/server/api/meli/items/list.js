/**
 * Search Items at MELI API, and returns an item list.
 *
 * */

import { PRODUCT_LIMIT , MELI_ROOT_URL } from '../constants';
import _ from 'lodash';
import { stringify } from 'querystring';
import fetch from 'node-fetch';

import { getPriceObject, getInDeep } from '../utils';


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
 *      "free_shipping": Boolean,
 *      "address": String
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


export default function searchItems(q, cb) {
  if (!q) return cb(null, {result: [], categories: []});

  fetch(MELI_ROOT_URL + 'search?'+ stringify({q, limit: PRODUCT_LIMIT})).then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    parseResponse(jsonResponse, cb);
    // parseResponse(jsonResponse, cb);
  }).catch(() => {
    cb({error: {message: 'MELI Api error'}});
  });
};


// parser functions
const fieldsMapping = ['id', 'title', 'condition', 'shipping.free_shipping',
                        {thumbnail: 'picture'}, {'address.state_name': 'address'},
                        {price: getPriceObject}];
function parseResponse(data, cb) {
  const result = {};
  result.items = getInDeep(data.results, ...fieldsMapping);

  let categoriesList = _.find(data.filters, {id: 'category'});

  if (_.isObject(categoriesList)) {
    let categoryFilter = _.get(_.find(categoriesList.values, 'path_from_root'), 'path_from_root');

    categoriesList = _.map(categoryFilter, 'name');
  }

  result.categories = categoriesList || [];

  Promise.resolve().then(() => {
    cb(null, result);
  });
}
