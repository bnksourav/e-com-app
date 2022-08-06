import React, { Component } from 'react'
const ProductContext=React.createContext()
export class prodet extends Component {
    state={
        product:[
        {
            id:1,
            Name:'pizza',
            image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:10,
            Qunt:2,
        },
        {
            id:2,
            Name:'Schezwan Paneer Momos',
            image:"https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Paneer-Momos-768x1164.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:11,
            Qunt:0,
        },
        {
            id:3,
            Name:'pizza',
            image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:18,
            Qunt:0,
        },
        {
            id:4,
            Name:'pizza',
            image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:145,
            Qunt:0,
        },
        {
            id:5,
            Name:'Schezwan Paneer Momos',
            image:"https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Paneer-Momos-768x1164.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:1,
            Qunt:0,
        },
        {
            id:6,
            Name:'pizza',
            image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:1,
            Qunt:0,
        },
        {
            id:7,
            Name:'pizza',
            image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:1,
            Qunt:0,
        },
        {
            id:9,
            Name:'pizza',
            image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
            Description:'Zomoz, a Hyderabad-baed quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:1,
            Qunt:0,
        },
        {
            id:10,
            Name:'pizza',
            image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
            Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
            MarPri:52,
            Price:1,
            Qunt:0,
        },
    ]
    }
    handleIncQty=(proObj)=>{
        let data=[...this.state.product];        
        for (let i = 0; i < data.length; i++) {
          if(proObj.id===data[i].id){
            data[i].Qunt=data[i].Qunt+1;
          }        
        }
        this.setState({
          product:[...data],
        })
      }
    render() {
        const [product] =this.state;
        const [handleIncQty] =this;
    return (
      <ProductContext.Provider value={{product,handleIncQty}}>
       { this.props.children}
      </ProductContext.Provider>
    )
  }
}


export default ProductContext;

// export default prodet
// const NoteProduct=(props)=>{
//     const 
//     return(
//         <noteContext.Provider value={producr}>
//             {props.children}
//         </noteContext.Provider>
//     )

// }
// export default NoteProduct

