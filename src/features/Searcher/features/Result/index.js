/**
 * Searcher result component.
 * */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './search_result.less';
import Item from './components/item';


class SearchResult extends Component {
    renderItemList(itemProps) {
        const { id } = itemProps;

        return <Item {...itemProps} key={id} />;
    }

    render() {
        const { items } = this.props;

        if (!items || _.isEmpty(items)) {
            return <div></div>
        }

        return (
            <ol className="item-list list-unstyled">
                {_.map(items, this.renderItemList)}
            </ol>
        )
    }
}

function mapStateToProps({items}) {
    return { items };
}

export default connect(mapStateToProps)(SearchResult);
