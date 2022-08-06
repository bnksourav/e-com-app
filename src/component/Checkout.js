import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

export class Checkout extends Component {
    constructor(){
        super()
        this.state={
            product:[],
            totalPrice:0,
            
        }
    }
    componentDidMount=async()=>{
        let data = await JSON.parse(localStorage.getItem("e-com") || '[]'); 
        let temp=0;
      
        console.log(data);
        for(let i=0;i<data.length;i++){
            temp=temp+(data[i].Qunt*data[i].Price);
        }
        this.setState({
            product:[...data],
            totalPrice:temp,
        })
        console.log(this.state.product);
        console.log("Cart");
    }
    handleIncQty=(proObj)=>{
        console.log("high from inc");
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
        })
      
        localStorage.setItem('e-com', JSON.stringify(data));
        
      }
      handleDecQty=(proObj)=>{
        console.log("high from inc");
        let data=[...this.state.product];
        let tempPrice=this.state.totalPrice;
        for (let i = 0; i < data.length; i++) {
          if(proObj.id===data[i].id){
            data[i].Qunt=data[i].Qunt-1;
            tempPrice=tempPrice-data[i].Price;
          }        
        }
        this.setState({
          product:[...data],
          totalPrice:tempPrice,
        })
      
        
      }
  render() {
    console.log("hi from render");
    return (
        <>
      <div className='check'>
        <div className='check-out-title'>
            <span class="material-symbols-outlined">arrow_back</span>
            <span>Checkout</span>
            <span></span>
        </div>
        <div className='pick-up'>
            <p style={{width:'100%' ,display:'flex',borderBottom:'2px solid gray'}} ><span >PICK UP</span></p>
                <p>Test </p>
                <p>Dallicha Officer Noida utterPradesh</p>
                <p>Order expaire in 30 min</p>
        </div>
        
        <div className='Card-check-detil'>
            <p style={{width:'100%' ,display:'flex',borderBottom:'2px solid gray'}} ><span >Card Details</span></p>
            <div className='Check-All' >
                <div className='item-Check'>
                    <div className='item-Ck'>Item </div>
                    <div className='Qty-Ck'>Qty</div>
                    <div className='Amount-Ck' >Amount</div>
                </div>
                {
                    this.state.product.map((proObj)=>(
                        proObj.Qunt>0?
                        <div className='item-Check' key={proObj.id}>
                            <div className='item-Ck'>{proObj.Name}</div>
                            <div className='Qty-Ck'>
                              <button className='btn-count' >
                                <span style={{color:'black',fontSize:'1.2rem'}} onClick={()=>this.handleDecQty(proObj)}>-</span>
                                {proObj.Qunt}
                                <span style={{color:'black',fontSize:'1.2rem'}} onClick={()=>this.handleIncQty(proObj)}>+</span></button>
                            </div>
                            <div className='Amount-Ck'>Rs. {proObj.Qunt*proObj.Price}</div>
                        </div> :undefined
                    ))
                }
                 
            </div>
        </div>
        
        <div className='Total-card-Amt-Ck'>
            <h3>Total</h3> 
            <h3>Rs. {this.state.totalPrice}</h3>   
        </div>
        <Link style={{ textDecuration:'none'}} to='/Conferm'  >
            <div className='select-check' style={{ textDecuration:'none'}}> 
                <span style={{ textDecuration:'none'}}>Select payment</span>
                <span className="material-symbols-outlined" style={{ textDecuration:'none'}}>arrow_forward</span>
            </div>
        </Link>
        
        
        
      </div>
      </>
    )
  }
}

export default Checkout