import React,{useState,useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux";
import{inc,dec} from "./rexux/productSlice"
import {Link} from "react-router-dom"
import './Checkout.css';
import { useNavigate } from "react-router-dom";


function Checkout() {
    const usedispatch=useDispatch();
    const item=useSelector((state)=>state);
    let navigate = useNavigate()
    const product=item.cart
    // console.log(item);
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
    const handleBack=()=>{
        navigate("/",)
      }
  return (
    <>
      <div className='check'>
        <div className='check-out-title'>
            <span class="material-symbols-outlined" onClick={()=>handleBack()}>arrow_back</span>
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
                    product.map((proObj)=>(
                        proObj.Qunt>0?
                        <div className='item-Check' key={proObj.id}>
                            <div className='item-Ck'>{proObj.Name}</div>
                            <div className='Qty-Ck'>
                              <button className='btn-count' >
                                <span style={{color:'black',fontSize:'1.2rem'}} onClick={()=>handleDecQty(proObj)}>-</span>
                                {proObj.Qunt}
                                <span style={{color:'black',fontSize:'1.2rem'}} onClick={()=>handleIncQty(proObj)}>+</span></button>
                            </div>
                            <div className='Amount-Ck'>Rs. {proObj.Qunt*proObj.Price}</div>
                        </div> :undefined
                    ))
                }
                 
            </div>
        </div>
        
        <div className='Total-card-Amt-Ck'>
            <h3>Total</h3> 
            <h3>Rs. {totalPrice}</h3>   
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

export default Checkout