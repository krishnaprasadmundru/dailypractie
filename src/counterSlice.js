import React, { useReducer } from "react";
import { createSlice } from "@reduxjs/toolkit";

const createSlice = createSlice({
  name : "Counter",
  IntialState : {count:0},
  reducers:{
    Increment:(state)=>{
     return state.value=state.value+1;
    },
    Decrement : (state)=>{
      state.value=state.value-1;
    },
    Reset : (state)=>{
      state.value=0;
    }
  }

}) 


export const {Increment,Decrement,Reset}=createSlice.actions;
export default useReducer;

