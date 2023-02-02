import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "../reducer/authentication-slice";


//Creating store so user will get value from authenticationSlice which will be 0/1 or null
const store = configureStore({
    reducer:{
        user: authenticationSlice
    }
})

export default store