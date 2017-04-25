import React from 'react';

import Breadcrumb from '../../components/Breadcrumb';


export default ({children}) => {
    return (
        <div>
            <Breadcrumb />
            {children}
        </div>
    );
}
