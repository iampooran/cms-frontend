import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../reducer/authentication-slice";


const store = configureStore({
    reducer:{
        user: authenticationSlice
    }
})

export default store