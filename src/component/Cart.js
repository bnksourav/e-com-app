import React, { Component } from 'react'
import './cart.css';

export class Cart extends Component {
    constructor(props){
        super(props)
        this.onBtnClick = this.onBtnClick.bind(this);
        this.state=({
            product:[],
            totalPrice:0,
            value: 0
        })
    }
    componentDidMount=async()=>{
        let data = await JSON.parse(localStorage.getItem("e-com") || '[]'); 
        let temp=0;
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
        this.onBtnClick()
      }
      handleDecQty=(proObj)=>{
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
      
        localStorage.setItem('e-com', JSON.stringify(data));
        this.onBtnClick();
      }
      onBtnClick() {
        console.log("call Child");
        this.setState({ 
            value: this.state.value + 1 
        });
        this.props.rerenderParentCallback();
    }
  render() {
    
    console.log(this.state.product);
    return (
        <>
        <div className='Card-1'>
            <p style={{width:'97%' ,display:'flex',justifyContent:'space-between'}} ><span ></span><span >Card Details</span><span style={{marginRight:'1rem'}} >X</span></p>
            <div className='Card-All' >
                <div className='item-Cart'>
                    <div className='item'>Item </div>
                    <div className='Qty'>Qty</div>
                    <div className='Amount'>Amount</div>
                </div>
                {
                    this.state.product.map((proObj)=>(
                        proObj.Qunt>0?<div className='item-Cart'>
                        <div className='item'>{proObj.Name}</div>
                        <div className='Qty'><button className='btn-count'>
                            <span style={{color:'black',fontSize:'1.2rem'}}  onClick={()=>this.handleDecQty(proObj) }>-</span>
                            {proObj.Qunt}
                            <span style={{color:'black',fontSize:'1.2rem'}} onClick={()=>this.handleIncQty(proObj)}>+</span></button>
                        </div>
                        <div className='Amount'>Rs. {proObj.Price*proObj.Qunt}</div>
                    </div> :undefined
                    ))
                }
                
            </div>
            <div className='Total-card-Amt'>
                <h3 style={{height:'2rem',marginLeft:'2rem'}}>Total</h3> 
                <h3 style={{height:'2rem',marginRight:'2rem'}}>Rs. {this.state.totalPrice}</h3>   
            </div>
        </div>
        </>
    )
  }
}

export default Cart