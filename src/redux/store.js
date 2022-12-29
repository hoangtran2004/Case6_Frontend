import {configureStore} from "@reduxjs/toolkit";
import workReducer from "./work/Work-slice";
import authReducer from "./auth/Auth-slice";


export const store = configureStore({
    reducer:{
        work: workReducer,
        auth: authReducer
    }
})