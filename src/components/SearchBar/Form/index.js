import React from 'react';
import { reduxForm, Field } from 'redux-form';


const searchForm = ({handleSubmit}) => {
    return (
        <form className="navbar-form" role="search" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-group">
                    <label className="sr-only" htmlFor="searchInput">label</label>
                    <Field name="search" type="text"
                           id="searchInput"
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


export default reduxForm({
    form: 'searchForm',
    validate
})(searchForm)
