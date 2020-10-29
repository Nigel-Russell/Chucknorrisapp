import React from 'react';
import './App.css'

function Button ({props}) {

    // const reloadpage = () => {
    //     window.location.reload(false);
    
    return(
        <div className ="button">
            <button onClick={props}>Hit Me</button>
        </div>
    )
}

export default Button;