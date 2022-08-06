import React, { Component } from 'react'
import Cart from './Cart';
import NavBar from './NavBar';
import { proDet } from './proDetail'
import './product.css';

export class Product extends Component {
    constructor(){
        super()
        this.state={
          product:[],
          totalPrice:0,
          totalItem:0,
          cartView:true,
          proNAv:true,
        }
    }
    componentDidMount=(()=>{
      
      let data=[...proDet]
      localStorage.setItem('e-com', JSON.stringify(data));
      console.log(data);
      this.setState({
        product:[...data]
      })
    })

    handleIncQty=async(proObj)=>{
      let data=[...this.state.product];
      let tempItem=this.state.totalItem;
      let tempPrice=this.state.totalPrice;
      for (let i = 0; i < data.length; i++) {
        if(proObj.id===data[i].id){
          data[i].Qunt=data[i].Qunt+1;
          tempItem=tempItem+1;
          tempPrice=tempPrice+data[i].Price;
        }        
      }
      this.setState({
        product:[...data],
        totalPrice:tempPrice,
        totalItem:tempItem,
      })
     localStorage.setItem('e-com', JSON.stringify(data));
    }
    handleDecQty=(proObj)=>{
      let data=[...this.state.product];
      let tempItem=this.state.totalItem;
      let tempPrice=this.state.totalPrice;
      for (let i = 0; i < data.length; i++) {
        if(proObj.id===data[i].id){
          data[i].Qunt=data[i].Qunt-1;
          tempItem=tempItem-1;
          tempPrice=tempPrice-data[i].Price;

        }        
      }
      this.setState({
        product:[...data],
        totalPrice:tempPrice,
        totalItem:tempItem,
      })
      localStorage.setItem('e-com', JSON.stringify(data));
    }
    handleCart=()=>{
      console.log("view cart");
      this.setState({
        cartView:!this.state.cartView,
      })
      console.log(this.state.cartView);
    }
  render() {
    console.log("product");
    return (
      <div style={{height:'98vh'}}>
        <div className='All-item'>
          {
            this.state.product.map((proObj)=>(
              <div className='pro-Div' key={proObj.id}>
                <div className='Img-Div'><img className='product-Img' src={proObj.image} /> </div>
                <div className='detail-div'>
                    <h2 className='title'>{proObj.Name}</h2>
                    <p className='desc'>{proObj.Description}</p>
                    <span><b>₹{proObj.Price}</b></span>
                    <s className='false-price'>₹{proObj.MarPri}</s>
                </div>
                {
                  proObj.Qunt=='0'?<button className='Add-btn' onClick={()=>this.handleIncQty(proObj)}> Add </button>:
                  <div><button className='Add-btn-empty'>
                  <span style={{color:'black',fontSize:'1.2rem' ,cursor:'pointer'}}  onClick={()=>this.handleDecQty(proObj)}>-</span>
                  {proObj.Qunt}
                  <span style={{color:'black',fontSize:'1.2rem',cursor:'pointer'}} onClick={()=>this.handleIncQty(proObj)}>+</span></button>
                  </div>
                }
                
              </div>
            ))
          }
        </div>
        <NavBar data={[this.state.totalItem,this.state.totalPrice,this.state.proNAv]}/>
      </div>
    )
  }
}

export default Product