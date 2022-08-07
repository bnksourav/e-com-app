import React,{useState,useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux";
import{inc,dec} from "./rexux/productSlice"
import Navbar from './Navbar';
import"./product.css"

function Product() {
    const usedispatch=useDispatch();
    const product=useSelector((state)=>state.cart);
    const handleDecQty=(proObj)=>{
        usedispatch(dec(proObj))
    }
    const handleIncQty=(proObj)=>{
        usedispatch(inc(proObj))
    }
  return (
    <div style={{height:'98vh'}}>
        <div className='All-item'>
          {
            product.map((proObj)=>(
              <div className='pro-Div' key={proObj.id}>
                <div className='Img-Div'><img className='product-Img' src={proObj.image} /> </div>
                <div className='detail-div'>
                    <h2 className='title'>{proObj.Name}</h2>
                    <p className='desc'>{proObj.Description}</p>
                    <span><b>₹{proObj.Price}</b></span>
                    <s className='false-price'>₹{proObj.MarPri}</s>
                </div>
                {
                  proObj.Qunt=='0'?<button className='Add-btn' onClick={()=>handleIncQty(proObj)}> Add </button>:
                  <div><button className='Add-btn-empty'>
                  <span style={{color:'black',fontSize:'1.2rem' ,cursor:'pointer'}}  onClick={()=>handleDecQty(proObj)}>-</span>
                  {proObj.Qunt}
                  <span style={{color:'black',fontSize:'1.2rem',cursor:'pointer'}} onClick={()=>handleIncQty(proObj)}>+</span></button>
                  </div>
                }
                
              </div>
            ))
          }
        </div>
        <Navbar/>
      </div>
  )
}

export default Product