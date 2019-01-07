import React from 'react';

import "./UserOutput.css"

const userOutput = (props) => {
    return (
        <p onClick={props.change}>{props.userName} passed the rifle test, now he holds the machette.</p>
    );
};

export default userOutput;