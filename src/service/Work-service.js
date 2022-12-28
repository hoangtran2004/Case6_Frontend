import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const workLogin = createAsyncThunk(
    'work/login',
    async (data)=>{
        const res = await axios.post(`http://localhost:8080/company/login`,data)
        return res.data
    }
)