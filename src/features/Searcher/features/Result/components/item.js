import React from 'react';
import { Link } from 'react-router';

import Price from '../../../../../components/Price';
import './item.less';


export default (props) => {
  const linkTo = `/items/${props.id}`,
        { price } = props;

  return (
    <li className="row-item">
        <h4>
          <div className="cost-data">
            <Price {...price} className="price" />
            { props.free_shipping ?
              <img src={require('../../../../../public/images/ic_shipping.png')}
                   alt="free shipping"
                   className="shipping-icon" />
              : ''}

          </div>
            <Link to={linkTo} className="item-title">
                {props.title}
            </Link>
        </h4>
        <div className="seller-address">
            {props.address}
        </div>
        <div className="thumbnail-item">
            <Link to={linkTo}>
                <img src={props.picture} alt={props.title} className="img-rounded" />
            </Link>
        </div>
    </li>
  );
}
