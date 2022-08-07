import React,{useState,useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux";
import{inc,dec} from "./rexux/productSlice"
import {Link} from "react-router-dom"
import {handleCart} from "./rexux/view"
import {useNavigate} from "react-router-dom"
import "./cart.css"

function Cart() {
    const usedispatch=useDispatch();
    const item=useSelector((state)=>state);
    const navigate=useNavigate()
    const product=item.cart
    console.log(item);
    const [totalPrice, settotalPrice]=useState(0)
    useEffect(()=>{
        const fachProduct=(product)=>{
            let temoprice=0;
            let tempItem=0
            for(let i=0;i<product.length;i++){
                temoprice=temoprice+product[i].Price*product[i].Qunt;
                tempItem=tempItem+product[i].Qunt;
            }
            settotalPrice(temoprice);
        }
        fachProduct(product);
    },[product])
    const handleDecQty=(proObj)=>{
        usedispatch(dec(proObj))
    }
    const handleIncQty=(proObj)=>{
        usedispatch(inc(proObj))
    }
    const handleCartV=(stat)=>{
        usedispatch(handleCart(stat))
        navigate("/")
    }
    
  return (
    <>
        <div className='Card-1'>
            <p style={{width:'97%' ,display:'flex',justifyContent:'space-between'}} ><span ></span><span >Card Details</span><span style={{marginRight:'1rem'}} onClick={()=>handleCartV(true)}>X</span></p>
            <div className='Card-All' >
                <div className='item-Cart'>
                    <div className='item'>Item </div>
                    <div className='Qty'>Qty</div>
                    <div className='Amount'>Amount</div>
                </div>
                {
                    product.map((proObj)=>(
                        proObj.Qunt>0?<div className='item-Cart'>
                        <div className='item'>{proObj.Name}</div>
                        <div className='Qty'><button className='btn-count'>
                            <span style={{color:'black',fontSize:'1.2rem'}}  onClick={()=>handleDecQty(proObj) }>-</span>
                            {proObj.Qunt}
                            <span style={{color:'black',fontSize:'1.2rem'}} onClick={()=>handleIncQty(proObj)}>+</span></button>
                        </div>
                        
                        <div className='Amount'>Rs. {proObj.Price*proObj.Qunt}</div>
                    </div> :undefined
                    ))
                }
                
            </div>
            <div className='Total-card-Amt'>
                <h3 style={{height:'2rem',marginLeft:'2rem'}}>Total</h3> 
                <h3 style={{height:'2rem',marginRight:'2rem'}}>{totalPrice}</h3>   
            </div>
        </div>
        </>
  )
}

export default Cart