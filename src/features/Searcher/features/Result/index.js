import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import Item from './components/item';


class SearchResult extends Component {
    renderItemList(itemProps) {
        const { id } = itemProps;

        return (
            <li key={id}>
                <Item {...itemProps} />
            </li>
        )
    }

    render() {
        const { items } = this.props;

        if (!items || _.isEmpty(items)) {
            return <div></div>
        }

        return (
            <div>
                {_.map(items, this.renderItemList)}
            </div>
        )
    }
}
/*                {_.map(items, this.renderItemList)}
 */

function mapStateToProps({items}) {
    return { items };
}

export default connect(mapStateToProps)(SearchResult);
