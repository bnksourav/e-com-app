import React, {  Component } from 'react'
import './Navbar.css';
import Cart from './Cart';
import Auth from './Auth';

export class NavBar extends Component {
  constructor(props){
    console.log("hiiii from const");
    super(props)
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    this.state={
      product:[],
      cardView:true,
      TotalPrice:0,
      ToalItem:0,
      continue:false,
      fromPro:true,
      AuthWin:false,
      
    }
    
  }
 
  componentDidMount=async()=>{
    let data = await JSON.parse(localStorage.getItem("e-com") || '[]'); 
    let tempprice=0;
    let tempitem=0;
    console.log(this.props);
    for(let i=0;i<data.length;i++){
      tempprice=tempprice+(data[i].Qunt*data[i].Price);
      tempitem=tempitem+(data[i].Qunt);
    }
       console.log("comp Did Mountt");
          this.setState({
            TotalPrice:tempprice,
            ToalItem:tempitem,
            product:[...data],
            fromPro:false,
            
        })
  }
 
  rerenderParentCallback=()=>{
    this.forceUpdate();
    this.componentDidMount();
    
  }
  handleCardview=()=>{
    this.setState({
      cardView:!this.state.cardView
    })
  }
  handleAuth=()=>{
    this.setState({
      cardView:true,
      AuthWin:!this.state.AuthWin,
    })
  }
  render() { 
    let tempitem=this.props.data[0];
    let tempprice=this.props.data[1];
    let frPd=this.props.data[2]; 
    console.log(this.props.data[2]);
    console.log(this.state.fromPro);
    if(frPd!=this.state.fromPro){
      console.log("hii from if");
      tempitem=this.state.ToalItem;
      tempprice=this.state.TotalPrice;
    }else{
      console.log("hii from else");
    }
    console.log(tempitem);
    console.log(tempprice);
    

    return (
      <>
      {
        this.state.cardView==true?<div className='bottom-nav-bar'>
        <button className='btn'><p>{this.state.ToalItem} Items(s) <br/>Total Rs. {this.state.TotalPrice}</p><span class="material-symbols-outlined" onClick={()=>this.handleCardview()}>expand_less</span></button>
        <h3 onClick={()=>this.handleAuth()}>Continue</h3>
        <span  onClick={()=>this.handleAuth()} class="material-symbols-outlined">arrow_forward</span>
      </div>:<><div className='bottom-nav-bar'>
        <button className='btn'><p>{tempitem} Items(s) <br/>Total Rs. {tempprice}</p><span class="material-symbols-outlined" onClick={()=>this.handleCardview()}>expand_more</span></button>
        <h3 style={{cursor:'pointer'}} onClick={()=>this.handleAuth()}>Continue</h3>
        <span className="material-symbols-outlined" onClick={()=>this.handleAuth()}>arrow_forward</span>
        </div>
        <Cart rerenderParentCallback={this.rerenderParentCallback}/></>
      }
      {
        this.state.AuthWin==true?<Auth/>:undefined
      }
      
      </>
    )
  }
}

export default NavBar