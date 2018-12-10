import React from 'react';
const Validation=(props)=>{
   
    return(
    <div>
    {
        props.length>5?
     <div>
    <p>Length using props : {props.length}</p>
    <h5>{props.val}</h5>
     </div>
      : <div><h5> text is too short!!</h5></div>
        }
    </div>
    
    
    
 );
}

export default Validation;