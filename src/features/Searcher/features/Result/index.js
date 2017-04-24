import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';


class SearchResult extends Component {
    renderItem(itemProps) {
        const {id, picture, title} = itemProps;
        return (
            <li key={id}>
                <Link to="/">
                    {title}
                </Link>
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
                {_.map(items, this.renderItem)}
            </div>
        )
    }
}


function mapStateToProps({items}) {
    return { items };
}

export default connect(mapStateToProps)(SearchResult);
