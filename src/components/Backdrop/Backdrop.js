import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {

    const cssClasses = ['Backdrop'];

    if (props.show) {
        cssClasses.push('BackdropOpen');
    } else {
        cssClasses.push('BackdropClosed');
    }

    return <div className={ cssClasses.join(' ') } onClick={ props.closed }></div>;

};

export default backdrop;