import React from 'react';
import './csscomp.css';
const CharComponent=(props)=>{
    return(
    <div className='hello' onClick={props.click}>
        <h5 >{props.ch}</h5>
    </div>
    );
}

export default CharComponent;