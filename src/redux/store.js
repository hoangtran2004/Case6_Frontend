import {configureStore} from "@reduxjs/toolkit";
import workReducer from "./work/Work-slice";
import authReducer from "./auth/Auth-slice";
import categoryReducer from "./category/Category-slice";
import jobReducer from "./job/Job-slice";
import cityReducer from "./city/City-slice";
import cvReducer from './cv/Cv-slice'

export const store = configureStore({
    reducer:{
        work: workReducer,
        auth: authReducer,
        category: categoryReducer,
        job: jobReducer,
        city: cityReducer,
        cv: cvReducer
    }
})