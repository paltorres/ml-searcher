import React from 'react';

import Breadcrumb from '../../components/Breadcrumb';


export default function Searcher({children}) {
    return (
        <div>
            <Breadcrumb />
            {children}
        </div>
    );
}
