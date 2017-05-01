/**
 * Price component.
 *
 * @param {string} currency
 * @param {int} amount
 * @param {int} decimals
 * @param {boolean} showDecimals By default false.
 *
 * */

import React, { Component } from 'react';
import Currency from 'js-money/lib/currency';
import accounting from 'accounting-js';

import './price.less';


const Price = (props) => {
  const moneyFormatted = moneyFormat(props.amount, props.currency);

  return (
    <span className={props.className}>{moneyFormatted} {props.showDecimals ?
        <span className="price-decimals">{props.decimals}</span>
      : ''}</span>
  )
};

function moneyFormat(amount, currency) {
  const { symbol_native } = Currency[currency];

  return accounting.formatMoney(
    amount,
    {symbol: symbol_native, thousand: '.', precision: 0, format: '%s %v'}
  );
}

export default Price;

Price.propTypes = {
  amount: React.PropTypes.number.isRequired,
  currency: React.PropTypes.string.isRequired,
};
