import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Auth.css'
import Product from './Product';
export class Auth extends Component {
  constructor(){
    super()
    this.state={
      Display:true,
    }
  }
  display=()=>{
    this.setState({
      Display:!this.state.Display
    })
  }
  render() {
    return (
      <>
      {
        this.state.Display==true?<> <div className='Auth-card'>
        <div className='Auth-title'>
            <span onClick={()=>this.display()} class="material-symbols-outlined">arrow_back</span>
            <span>Login</span>
            <span></span>
        </div>
        <div className='Auth-body'>
            <input className='Auth-input' type="tel"  name="country_code" placeholder='Enter Your Phone Number'pattern="[1-9]{1}[0-9]{9}" maxlength="10"></input>
           <Link to='/Checkout' style={{width:'98%'}}> <button className='Auth-submit'>SUBMIT</button></Link>
            <span style={{display:'flex',justifyContent:'center',width:'95%',margin:".5rem",textDecoration:'underline',color:"gray"}}> will do it later</span>
        </div>

      </div></>:<Link to='/'/>
      }
      
      
      </>
      
    )
  }
}

export default Auth;