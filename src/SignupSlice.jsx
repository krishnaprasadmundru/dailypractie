import React from 'react';
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"; 

export  const SignupSubmit = createAsyncThunk(
  "signup/signupSubmit",
  async (formData) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    return await res.json();
  }
);


 const SignupSlice = createSlice({
        name:"signup", 
        initialState : {
            loading : false ,
            success: false,
            error : null,
            data:null
        },
        reducers:{
            resetSignup:(state)=> {
               state.loading=false;
               state.success=false;
               state.error=null;
               state.data=null;
            }
           
    } ,
     extraReducers:(builder)=>{
                builder.addCase(SignupSubmit.pending,(state)=>{
                    state.loading=true;
                    state.success=false;
                    state.error=null
                }).addCase(SignupSubmit.fulfilled,(state, action)=>{
                    state.loading=false;
                    state.success=true;
                    state.data=action.payload;
                }).addCase(SignupSubmit.rejected,(state)=>{
                    state.loading=faslse;
                    state.error="signup failed"
                })
            }


    }); 


export const { resetSignup } = SignupSlice.actions;
export default SignupSlice.reducer;
      


