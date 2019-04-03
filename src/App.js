import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import ProductList from './ProductList';

class App extends Component {
  constructor(){
    super();
    this.state={
      counter:0,
      searchQuery:''
    }
    this.handleSearchClick=this.handleSearchClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleAdd=this.handleAdd.bind(this);
    this.handleRemove=this.handleRemove.bind(this);
}
handleAdd(data){
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState);

}
handleRemove()
{
  let currentState=this.state;
  if(currentState.counter==0){
    this.setState(currentState);
  }else{
    currentState.counter--;
    this.setState(currentState);
  }
}
handleSearchClick(data)
  {
    console.log(data);
    let currentState=this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  handleChange(data)
  {
    console.log(data);
    let currentState=this.state;
    currentState.searchQuery=data;
    this.setState(currentState);
  }
  render() {
    return (
      <div className="App">
       <Header  add={this.state.counter}></Header>
       <Search search={this.handleSearchClick}
        change={this.handleChange}/>
       
       <ProductList count={this.handleAdd} removebtn={this.handleRemove} search={this.state.searchQuery}/>
      
      </div>
    );
  }
}

export default App;
