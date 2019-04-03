import React, {Component} from 'react';
import Button from './Button';

export default class ProductDetails extends Component{
    constructor(props)
    {
        console.log(props);
        super(props);
    }
    render()
    {
        return(
        <div className="container">
          
            <h2>Name:{this.props.details.name}</h2>
            <div className="card-body">
            <h5>Price:{this.props.details.salePrice}</h5>
            <img src={this.props.details.mediumImage}></img> 
            <p>{this.props.details.shortDescription}</p>
           
           <Button add1={this.props.addCount} remove={this.props.remove}></Button>
    
           </div>   
        </div>


        )
    }

}

