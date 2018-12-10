import React from 'react';
const UserInput=(props)=>{
    return (
    <div>
    <h3>write something.. to change the username2</h3>
    <input type="text" onChange={props.change} value={props.username2}/>
    </div>
    );
}

export default UserInput;