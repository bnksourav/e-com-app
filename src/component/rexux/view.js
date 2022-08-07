import {createSlice } from "@reduxjs/toolkit"
const initialState=
    {
        viewAuth:false,
        viewcard:true,
        isAuth:false,
    }


const view=createSlice({
    name:'view',
    initialState,
    reducers:{
        handleCart(state,action){
            console.log( state.viewcard +"  cartStatus");
            return {...state,viewcard:action.payload}
        },
        handleAuth(state,action){
            console.log( state.viewAuth);
            console.log("hAuth");
            return {...state,viewAuth:action.payload}
        },
        isLogin(state,action){
            console.log(action.payload);
                return {...state,viewAuth:false,isAuth:true}
            
        }
    }


})

export const {handleCart,handleAuth,isLogin}=view.actions
export default view.reducer;