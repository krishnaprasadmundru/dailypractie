import React  from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore"; 
import storage from "redux-persist/lib/storage";   
import authReducer from "./authSlice"; 


const persistConfig={
    key:"root",
    storage 
};

const rootReducer = combineReducers ({
    auth:authReducer
}) 

const persistedReducer = persistReducer(persistConfig , authReducer);

export const store = configureStore({
reducer : persistedReducer ,
});  

export const persistor = persistStore(store);



