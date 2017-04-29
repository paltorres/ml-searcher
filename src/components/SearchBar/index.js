/**
 * SearchBar component.
 *
 * */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router'
import _ from 'lodash';

import searchItems from './actions';
import './searchBar.less'
import SearchForm from './Form';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  // todo: remove this
/*
  componentWillMount() {
    const { term } = this.props;

    if (term) this.props.searchItems(term);
  }
*/

  onSubmitForm({search}) {
    if (search) this.props.searchItems(search);
  }

  render() {
    return (
      <nav className="navbar navbar-search" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">
              <img src={require('../../public/images/Logo_ML.png')} alt="Logo"/>
            </IndexLink>
          </div>
          <div className="navbar-collapse">
            <SearchForm onSubmit={this.onSubmitForm} initSearch={this.props.term}/>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    term: _.get(state, 'routing.locationBeforeTransitions.query.search') // 'locationProps.location.search'
  };
}

export default connect(mapStateToProps, { searchItems })(SearchBar);
