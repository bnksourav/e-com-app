import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import AuthPage from './AuthPage'
import Cart from './Cart';
import {handleAuth,handleCart} from "./rexux/view"
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    const usedispatch=useDispatch();
    const item=useSelector((state)=>state);
    const navigate=useNavigate()
    const product=item.cart;
    const view=item.view;
    const [totalPrice, settotalPrice]=useState(0)
    const [totalItem, settotalItem] = useState(0)
    const [cardView, setcardView] = useState(true);
    useEffect(()=>{
        const fachProduct=(product)=>{
            let temoprice=0;
            let tempItem=0
            for(let i=0;i<product.length;i++){
                temoprice=temoprice+product[i].Price*product[i].Qunt;
                tempItem=tempItem+product[i].Qunt;
            }
            settotalPrice(temoprice);
            settotalItem(tempItem);
        }
        fachProduct(product);
    },[product])
    const hendalAuth=(stat)=>{
      usedispatch(handleAuth(stat))
      if(view.isAuth){
        navigate("/Checkout");
      }
    }
    const handleCartV=(stat)=>{
      usedispatch(handleCart(stat))
    }
  return (    
    <>
      {
        view.viewcard==true?<div className='bottom-nav-bar'>
        <button className='btn'><p>{totalItem} Items(s) <br/>Total Rs. {totalPrice}</p><span class="material-symbols-outlined" onClick={()=>handleCartV(false)}>expand_less</span></button>
        <h3 onClick={()=>hendalAuth(true)}>Continue</h3>
        <span  onClick={()=>()=>hendalAuth(true)} class="material-symbols-outlined">arrow_forward</span>
      </div>:<><div className='bottom-nav-bar'>
        <button className='btn'><p>{totalItem} Items(s) <br/>Total Rs. {totalPrice}</p><span class="material-symbols-outlined" onClick={()=>handleCartV(true)}>expand_more</span></button>
        <h3 style={{cursor:'pointer'}} onClick={()=>hendalAuth(true)}>Continue</h3>
        <span className="material-symbols-outlined" onClick={()=>hendalAuth(true)}>arrow_forward</span>
        </div>
        <Cart/></>
      }
      {
        view.viewAuth==true?<AuthPage/>:undefined
      }
    </>
  )
}

export default Navbar