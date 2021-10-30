import './App.css';
import React, { Component } from "react";


class ShowHide extends React.Component{
  state={
    divcontainer:false,
    divcontainer2:false,
  }
  render(){
    var change= e=>{
      this.setState({divcontainer:!this.state.divcontainer});
    }
    var change2= e=>{
      this.setState({divcontainer2:!this.state.divcontainer2});
    }
    const x=this.state.divcontainer;
    const y=this.state.divcontainer2;
    return(
      <div className='Parent'>
        <center>
        <h1 className='heading'>Styling using  Functional and  Class Component</h1>
        <div className='options'>
          <div>
            <button className='click' onClick={change}>{x?'To see styling in Functional Component':'To see styling in Functional Component'}</button>
          {
            x &&(<div className="classComp">
          <h2>This is created using Functional Based Component</h2>
          <p>This is done using external CSS</p>
          <p style={{color:'blue'}}>This is done using internal CSS</p>
            </div>)
          }
          </div>
          <div>
            <button className='click' onClick={change2}>{y?'To see styling in Class Component':'To see styling in Class Component'}</button>
          {
            y &&(<div className="classComp" id='classComp1'>
          <h2>This is created using Class Based Component</h2>
          <p>This is done using external CSS</p>
          <p style={{color:'blue'}}>This is done using internal CSS</p>
            </div>)
          }
          </div>
        </div>
        </center>
      </div>
    );
  }
}


function App() {
  return (
    
      
      <ShowHide></ShowHide>
   
  );
}

export default App;
