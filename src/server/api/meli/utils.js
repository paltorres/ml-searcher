/**
 * MELI api utils.
 *
 * */

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
