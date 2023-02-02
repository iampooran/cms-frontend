import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    //name for state
    name: "user",
    //initial state will be null for login/user
    initialState:{
        user: null,
    },
    reducers:{
        //will set isLogin/user to 1
        login: (state, action) =>{
            //will set isLogin/user to 1
            state.user = action.payload
        },
        //will set isLogin/user to 0
        logout: (state) => {
            //will set isLogin/user to 0
            state.user = null;
        }
    }
})

//exporting
export const { login, logout } = authenticationSlice.actions
export const selectUser = (state: any) => state.user.user
export default authenticationSlice.reducer