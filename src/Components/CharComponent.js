import React from 'react';
import classes from './csscomp.css';
const CharComponent=(props)=>{
    return(
    <div className={classes.hello} onClick={props.click}>
        <h5>{props.ch}</h5>
    </div>
    );
}

export default CharComponent;