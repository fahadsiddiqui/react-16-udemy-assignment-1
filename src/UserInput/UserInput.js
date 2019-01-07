import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    return (
        <input className="user-name-input" type='text' onChange={props.change} value={props.userName} />
    );
};

export default userInput;