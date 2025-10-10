import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const authSlice=createSlice({
    name:"auth",
    initialState : {
        IsLoggedIn : false,
        username : ""
    },
    reducers: {
        login:(state , action)=>{
            state.IsLoggedIn = true;
            state.username = action.payload;
        },
        logout:(state , action)=>{
               state.IsLoggedIn = false ;
               state.username="" ;
        },
    },
}); 

export const {login , logout} = authSlice.actions ;
export default authSlice.reducer;