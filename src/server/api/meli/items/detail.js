/**
 * Get the item detail from ML api.
 * */

import _ from 'lodash';
import fetch from 'node-fetch';

import { MELI_ITEMS_URL } from '../constants';
import { getPriceObject } from '../utils';
import { HTTP_STATUS_NOT_FOUND } from '../../constants/http';

/**
 * Find the an item detail at MELI api.
 *
 * The function returns the request with the follow shape:
 *  {
 *  “item”: {
 *    "id": String,
 *    "title": String,
 *    "price": {
 *      "currency": String,
 *      "amount": Number,
 *      "decimals": Number,
 *    },
 *    “picture”: String,
 *    "condition": String,
 *    "free_shipping": Boolean,
 *    "sold_quantity", Number
 *    "description": String
 *    }
 *  }
 *
 * If the resource is not found returns an empty object.
 *
 * @param {string|number} itemId A MELI item id.
 * @param {Function} cb The callback function to be called once the function
 *                      get end.
 *
 * Errors:
 *  If the MELI API not found the item, the functions returns an empty object.
 *  Any other error, it returns the error it self.
 * */
export default function getItemByID(itemId, cb) {
  const promises = _.map([MELI_ITEMS_URL + itemId, MELI_ITEMS_URL + itemId + '/description'], (url) => {
    return fetch(url).then((response) => {
      return response.json();
    });
  });

  Promise.all(promises).then((response) => {
    const result = {};

    result.item = parseItemData(response[0]);
    result.item.description = parseDescription(response[1]);

    cb(null, result);
  }).catch((e) => {
    if (_.get(e, 'response.status') === HTTP_STATUS_NOT_FOUND) return cb(null, {});

    cb(e);
  });
};

// parser functions
function parseItemData(data) {
  const {id, title, thumbnail, condition, sold_quantity} = data,
    free_shipping = _.get(data, 'shipping.free_shipping'),
    price = getPriceObject(data);

  return {id, title, price, condition, free_shipping, sold_quantity, picture: thumbnail}
}

function parseDescription(data) {
  return _.get(data, 'text');
}
