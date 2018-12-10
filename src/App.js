import React, { Component } from 'react';
import './App.css';
import UserInput from './Input/UserInput.js';
import UserOutput from './Input/UserOutput.js';
import Validation from './Components/Validation.js';
import CharComponent from './Components/CharComponent.js';

class App extends Component {
    
state={
    name: "",
    Length: 0,
    names:[]
}
    
changeListener=(event)=>{
 this.setState({
     name: event.target.value,
    Length: event.target.value.length,
    names:event.target.value.split('')
     
 }); 
    
}

DeleteHandler=(index)=>{
   const names=this.state.names;
   names.splice(index,1);
    this.setState({names:names});
}


    
render(){
    
 
    return(
    <div>
    <input type="text" onChange={this.changeListener}/>
    <p>Length: {this.state.Length}</p>
    <Validation length={this.state.Length} />
    
    <div>  
  {   
   this.state.names.map((val,index)=><CharComponent ch={val} click={()=>this.DeleteHandler(index)}/>) 
  }
  <p>{this.state.names[3]}</p>
  </div>
  
  
   
        
    </div>
    
    );
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*  state={
        username2:"simu"
    }

ClickHandler=(event)=>{
    this.setState(
    {
    username2:event.target.value
    });
    
}
    
    render(){
        return(
            <div className="App">
        <UserInput change={this.ClickHandler} username2={this.state.username2}/>
            <UserOutput username1={"kiran"} username2={this.state.username2} />
            </div>
        );
    }
    */
}

export default App;