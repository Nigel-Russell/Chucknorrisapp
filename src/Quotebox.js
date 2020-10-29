import React from 'react';
import './App.css';

function Quotebox ({props}) {
    return(
        <div>
            <h2 className ="thequote">
                {props}
            </h2>

        </div>
    )
}

export default Quotebox;