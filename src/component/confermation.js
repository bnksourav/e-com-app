import React, { Component } from 'react';
import "./OrderConf.css";

export class Conferm extends Component {
  render() {
    return (
      <div className='conf-img-div'  style={{display:'flex',justifyContent:'center'}}>
        <img className='conf-img' src='https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-2101.jpg?w=2000'/> 
      </div>
    )
  }
}

export default Conferm