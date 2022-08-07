import {createSlice } from "@reduxjs/toolkit"
const initialState=[
    {
        id:1,
        Name:'Momos',
        image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
        Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
        MarPri:102,
        Price:60,
        Qunt:2,
    },
    {
        id:2,
        Name:'Schezwan Paneer Momos',
        image:"https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Paneer-Momos-768x1164.jpg",
        Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
        MarPri:92,
        Price:40,
        Qunt:0,
    },
    {
        id:3,
        Name:'Pizza',
        image:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        Description:'Yearning for a cheesy delight? Then we have an easy cheese pizza recipe to add soul to your weekend ....',
        MarPri:152,
        Price:118,
        Qunt:0,
    },
    {
        id:4,
        Name:'Chees Pizza',
        image:"https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
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
        MarPri:152,
        Price:98,
        Qunt:0,
    },
    {
        id:6,
        Name:'pizza',
        image:"https://geekrobocook.com/wp-content/uploads/2021/04/Fried-veg-momos.jpg",
        Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
        MarPri:252,
        Price:111,
        Qunt:0,
    },
    {
        id:7,
        Name:'Berger with franch frice',
        image:"https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        Description:'Zomoz, a Hyderabad-based quick-service restaurant chain, has become the fastest-growing momo brand, overtaking the growth rate of its competitors.',
        MarPri:252,
        Price:159,
        Qunt:0,
    },
    {
        id:9,
        Name:'Desi Indian-Style Burger (Indi-Burger)',
        image:"https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Description:'A great chicken burger recipe! Natasha is my eldest daughter, and her eyes light up when I announce weomo brand, overtaking the growth rate of its competitors.',
        MarPri:102,
        Price:69,
        Qunt:0,
    },
    {
        id:10,
        Name:'Berger',
        image:"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
        Description:'With recipes from Andrew Zimmern, Giada De Laurentiis, Martha Stewart and more, you ve got a summer s worth of burgers just waiting to be flipped.me the fastest-growing momo brand, overtaking the growth rate of its competitors.',
        MarPri:72,
        Price:59,
        Qunt:0,
    },
]

const ProductSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        inc(state,action){
            // console.log(action);
            return state.map((proObj)=>{
                if(proObj.id==action.payload.id){
                      return {...proObj,Qunt:proObj.Qunt+1}
                }
                return proObj
            })
        },
        dec(state,action){
            return state.map((proObj)=>{
                if(proObj.id==action.payload.id){
                      return {...proObj,Qunt:proObj.Qunt-1}
                }
                return proObj
            })
        }
        
    }


})

export const {inc,dec}=ProductSlice.actions
export default ProductSlice.reducer;