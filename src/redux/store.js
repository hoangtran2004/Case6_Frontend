import {configureStore} from "@reduxjs/toolkit";
import workReducer from "./work/Work-slice";
import authReducer from "./auth/Auth-slice";
import categoryReducer from "./category/Category-slice";
import jobReducer from "./job/Job-slice";


export const store = configureStore({
    reducer:{
        work: workReducer,
        auth: authReducer,
        category: categoryReducer,
        job: jobReducer
    }
})