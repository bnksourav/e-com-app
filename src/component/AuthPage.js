import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import {handleAuth,handleCart,isLogin} from "./rexux/view"
import { useNavigate } from "react-router-dom";
import "./Auth.css"

const AuthPage= ()=> {
    const usedispatch=useDispatch();
    const item=useSelector((state)=>state);
    let navigate = useNavigate()
    const isAut= item.view.isAuth;
    const [entOto, setentOto] = useState("")
    const [Mnum, setMnum] = useState("")
    console.log(isAut+"    from summit");

    const hendalAuth=(stat)=>{
        usedispatch(handleAuth(stat))
        usedispatch(handleCart(stat))
      }
    const handlevalidation=(otp)=>{
      setentOto(otp)
    }

    const Callsumbit=()=>{
      console.log(entOto);
      if(entOto==9856 && Mnum.length==10){
        navigate("/Checkout");
        usedispatch( isLogin())
      }
      setentOto("")
      setMnum("");
    }
    const handlenumber=(num)=>{
      setMnum(num)
    }
  return (
    <>
      {
        <> <div className='Auth-card'>
        <div className='Auth-title'>
            <span onClick={()=>hendalAuth(false)} class="material-symbols-outlined">arrow_back</span>
            <span>Login</span>
            <span></span>
        </div>
        <div className='Auth-body'>
           <div className="input-otp"> <input className='Auth-input' type="tel"  name="country_code" value={Mnum} placeholder='Enter Your Phone Number'pattern="[1-9]{1}[0-9]{9}" maxlength="10" onChange={(e)=>handlenumber(e.target.value)}></input> <input className='Auth-otp' type="text" value={entOto}  placeholder='OPT' maxlength="4" onChange={(e)=>handlevalidation(e.target.value)}></input></div>
          <button className='Auth-submit' onClick={()=>Callsumbit()}>SUBMIT</button>
            <span style={{display:'flex',justifyContent:'center',width:'95%',margin:".5rem",textDecoration:'underline',color:"gray"}}> will do it later</span>
        </div>
      </div></>
      }
      </>
  )
}

export default AuthPage;