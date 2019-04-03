import React, { Component } from 'react';


export default class Search extends Component {
    constructor(){
        super();
    }
  render() {
    return (
      <div>
   <input type="text" placeholder="Search" onChange={(e)=>{this.props.change(e.target.value)}}></input>&nbsp;&nbsp;
   <button className="btn btn-primary" onClick={()=>{this.props.search("i am clicked")}}>Search</button>
</div>



    
    );
  }
}
