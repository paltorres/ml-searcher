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

    const { term } = this.props;

    this.state = { term };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentWillMount() {
    const { term } = this.props;

    if (term) this.props.searchItems(term);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState);
  }

  onSubmitForm({search}) {
    if (search) this.props.searchItems(search);
  }

  // Helper function.
  onChangeHandler(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <nav className="navbar navbar-search">
        <div className="container">
          <div className="navbar-header">
            <IndexLink className="navbar-brand" to="/">
              <img src={require('../../public/images/Logo_ML.png')} alt="Logo"/>
            </IndexLink>
          </div>
          <div className="collapse navbar-collapse">
            <SearchForm onSubmit={this.onSubmitForm}/>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state, locationProps) {
  return {
    term: _.get(state, 'routing.locationBeforeTransitions.location.search') // 'locationProps.location.search'
  };
}

export default connect(mapStateToProps, { searchItems })(SearchBar);
