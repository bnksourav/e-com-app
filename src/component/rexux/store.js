import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./productSlice"
import viewReducer from "./view";



const store=configureStore({
    reducer:{
        cart:cartReducer,
        view:viewReducer,
    },
})


export default store;