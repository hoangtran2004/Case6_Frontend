import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCity = createAsyncThunk(
    'getCategory',
    async ()=>{
        const res = await axios.get(`http://localhost:8080/city`)
        return res.data
    }
)