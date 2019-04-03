import React, { Component } from 'react';
import ProductDetails from './ProductDetails';


export default class ProductList extends Component {
    constructor(props){
      super();
        this.state={
            Products:[{"name": "Best Choice Products 6V Kids Ride",
            "mediumImage": "https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
            "salePrice": 119.99,
            "shortDescription": "Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes. Kids can drive freely on their own, but parents can step in with a remote control to make sure they stay out of danger for peace of mind. Built large and scaled small for your little one's biggest adventures."},
          ,{
            "name": "Disney/Pixar Cars 3 Lightning McQueen 20-Inch Vehicle",
            "mediumImage": "https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
            "salePrice": 9.99,
            shortDescription: "Disney/Pixar Cars fans get big action with this 20&quot; Lightning McQueen vehicle! The favorite leading character features iconic colors.",

          }]
        }
    }
  render() {
    // let listOfProducts=this.state.Products.map((product,index)=>{
    //   return <ProductDetails key={index} details={product}/>

    let listOfProducts='';
        if(this.props.search=='')
        {
            listOfProducts=this.state.Products.map((product,index)=>{

            return <ProductDetails remove={this.props.removebtn} addCount={this.props.count}key={index} details={product}/>})

        }else{

            let filtered=this.state.Products.filter((product,index)=>{
                return product.name.includes(this.props.search)
            });

            listOfProducts=filtered.map((product,index)=>{
                return <ProductDetails remove={this.props.remove} key={index} details={product}/>
            })

        }
  
    return (
      <div>
   {listOfProducts}
</div>



    
    );
  }
}
