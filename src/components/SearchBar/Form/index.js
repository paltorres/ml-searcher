import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';


let searchForm = ({handleSubmit, initialValue}) => {
    return (
        <form className="navbar-form" role="search" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <label className="sr-only" htmlFor="searchInput">label</label>
                    <Field name="search" type="text"
                           id="searchInput" value={initialValue}
                           placeholder="Nunca dejes de buscar"
                           component="input" className="form-control" />
                    <button type="submit" className="input-group-addon">
                        <img src={require('../../../public/images/ic_Search.png')} alt=""/>
                    </button>
                </div>
            </div>
        </form>
    )
};

const validate = ({term}) => {
    return !!term
};

function mapStateToProps(state, ownProps) {
    return { initialValues: {search: ownProps.initSearch} }
}

searchForm = reduxForm({
    form: 'searchForm',
    validate
})(searchForm);


export default connect(mapStateToProps)(searchForm);;
