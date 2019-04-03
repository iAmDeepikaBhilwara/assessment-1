import React, { Component } from 'react';


export default class Header extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      
       <div className="jumbotron">
  <h3>Cart</h3>      
  <label className="badge">{this.props.add}</label>
</div>



    
    );
  }
}
