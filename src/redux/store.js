import {configureStore} from "@reduxjs/toolkit";
import workReducer from "./work/Work-slice";
import authReducer from "./auth/Auth-slice";
import categoryReducer from "./category/Category-slice";


export const store = configureStore({
    reducer:{
        work: workReducer,
        auth: authReducer,
        category: categoryReducer
    }
})