import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class Breadcrumb extends Component {
    render() {
        const { categories } = this.props;

        if (!categories || _.isEmpty(categories)) return <div></div>;

        return (
            <div>
                <ol className="breadcrumb">
                    {_.map(categories, (name, index, arr) => {
                        return (
                        <li key={name} className={index === (arr.length - 1) ? 'active' : ''}>
                            {name}
                        </li>)
                    })}
                </ol>
            </div>
        )
    }
}

function mapStateToProps({categories}) {
    return {categories};
}

export default connect(mapStateToProps)(Breadcrumb);
