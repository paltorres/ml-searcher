/**
 * MELI api utils.
 *
 * */
import _ from 'lodash';

/**
 * Get the price object in a common shape.
 *
 *  price {
 *    amount,
 *    decimal,
 *    currency
 *  }
 *
 *  @param {Object} item A Meli item.
 * */
export function getPriceObject(item) {
  let { price } = item;
  const { currency_id } = item,
    amount = parseInt(price, 10),
    decimals = isNatural(price) ? 0 : getDecimals(price);

  return {amount, decimals, currency: currency_id};
}

/* helper functions */
function getDecimals(n) {
  n = n.toFixed(2);

  return parseInt(n.split('.')[1]);
}
function isNatural(n) {
  n = parseFloat(n);

  return Math.floor(n) === n;
}

/**
 * parseInDeep(collection, args*)
 *
 * Receives a collection or an object to get its data by key.
 * The args parameter is a/an string|object, each type makes his own behavior.
 *
 * Definition:
 *  {string}: The string is a key in the collection elements.
 *    ex: 'key', 'key.deep'.
 *  {object}: Gets the the value and put the object value to key. If the value is a function,
 *    it will be executed.
 *
 *
 * Example of usage:
 *  getInDeep(
 *      [{name: 'John', lasName: 'Doe', address: { street: '64' }}],
 *      {name: 'first'}, {lastName: 'last'}, 'address.street'
 *  )
 *  returns:
 *  [{ first: 'John', last: 'Doe', street: '64'}]
 *
 *
 * @param {array|object} collection An array or object that contains the data to
 * be fetched for the other parameters.
 * */
export function getInDeep(collection) {
  let result;

  const args = arguments;

  if (_.isArray(collection)) {
    result = _.map(collection, getByArgs);
  } else if (_.isObject(collection)) {
    result = getByArgs(collection);
  }

  // aux callback
  function getByArgs(obj) {
    let index = 1,
        objResult = {};

    while (args[index]) {
      let newObj = getInObject(obj, args[index]);
      objResult = _.merge(objResult, newObj);
      index++;
    }
    return objResult;
  }

  return result;
}

// auxiliary functions
function getInObject(obj, param) {
  const result = {};

  let path,
      keyName,
      cb;

  switch (typeof param) {
    case 'object':
      path = _.first(_.keys(param));
      keyName = param[path];
      if (_.isFunction(keyName)) {
        cb = keyName;
        keyName = getKeyName(path);
      }
      break;
    case 'string':
      path = param;
      keyName = getKeyName(path);
      break;
    default:
      throw 'Error: The types `object` or `string` are required.'
  }

  result[keyName] = _.isFunction(cb) ? cb(obj) : _.get(obj, path);

  return result;
}

const pathSeparator = '.';
function getKeyName(path) {
  return _.chain(path).split(pathSeparator).last().value();
}
