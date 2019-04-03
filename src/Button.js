import React, { Component } from 'react';


export default class Button extends Component {
    constructor(props){
      console.log(props);
        super();
    }
  render() {
    return (
      
       <div>
   <button className="btn btn-primary"onClick={()=>this.props.add1("i am clicked")}>Add to cart</button>&nbsp;&nbsp;
   <button className="btn btn-primary" onClick={()=>this.props.remove()}>Remove cart</button>
    
</div>



    
    );
  }
}