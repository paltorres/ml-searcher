import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';


const inlineStyle = {
    display: 'inline'
};

const tableStyle = {
    display: 'table'
};

const cursorStyle = {
    cursor: 'pointer',
    width: '1%'
};


let searchForm = ({handleSubmit, initialValue}) => {
    return (
        <form className="navbar-form" role="search" onSubmit={handleSubmit}>
            <div className="form-group" style={inlineStyle}>
                <div className="input-group" style={tableStyle}>
                    <Field name="search" type="text"
                           id="searchInput"
                           placeholder="Nunca dejes de buscar"
                           component="input" className="form-control" />
                    <span className="input-group-addon" onClick={handleSubmit} style={cursorStyle}>
                        <img src={require('../../../public/images/ic_Search.png')} alt=""/>
                    </span>
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
