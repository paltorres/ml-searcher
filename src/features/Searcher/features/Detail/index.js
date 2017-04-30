import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Price from '../../../../components/Price';
import './item_detail.less';


class ItemDetail extends Component {
    renderExtraData() {
      const { item } = this.props,
            { price } = item;
        return (
          <div>
            <span>
              <span className="text-capitalize">{item.condition}</span> - {item.sold_quantity} vendido{item.sold_quantity !== 1 ? 's' : ''}
            </span>
            <h3 className="item-title">{item.title}</h3>
            <Price amount={price.amount}
                   currency={price.currency}
                   decimals={price.decimals}
                   showDecimals={true}
                  className="item-price" />

              <Link to={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${item.id}`}
                    target="_blank"
                    className="btn btn-primary btn-block btn-lg">
                  Comprar
              </Link>
          </div>
        )
    }

    render() {
        const { item } = this.props;
        if (!item) return <div></div>;

        return (
          <div className="frame-container">
              <div className="item-description">
                <img src={item.picture || ''} alt={item.title} className="item-picture"/>

                <h3>Descripción del producto</h3>
                <div className="description-item-text">
                  <div dangerouslySetInnerHTML={{__html: item.description || ''}}></div>
                </div>
              </div>
              <div className="item-data pull-right">
                  {this.renderExtraData()}
              </div>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {item: state.selectedItem};
}

export default connect(mapStateToProps)(ItemDetail);
